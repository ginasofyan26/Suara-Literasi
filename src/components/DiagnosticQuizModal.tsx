import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Volume2, RotateCcw } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '../data/booksData';
import { ReadingLevel } from '../types';
import { NarratorSpeech, SoundEffects } from '../utils/audioUtils';

interface DiagnosticQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommendedLevel: (level: ReadingLevel) => void;
}

export const DiagnosticQuizModal: React.FC<DiagnosticQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommendedLevel,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<ReadingLevel[]>([]);
  const [resultLevel, setResultLevel] = useState<ReadingLevel | null>(null);

  if (!isOpen) return null;

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentStep];

  const handlePlayPrompt = (text: string) => {
    NarratorSpeech.speak(text, 0.9);
  };

  const handleSelectOption = (levelScore: ReadingLevel) => {
    SoundEffects.playStarDing();
    const newAnswers = [...answers, levelScore];
    setAnswers(newAnswers);

    if (currentStep + 1 < DIAGNOSTIC_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommended level (majority vote / average rounded)
      const sum = newAnswers.reduce((a, b) => a + b, 0);
      const calculated = Math.round(sum / newAnswers.length) as ReadingLevel;
      const finalLevel = Math.max(1, Math.min(3, calculated)) as ReadingLevel;
      setResultLevel(finalLevel);
      SoundEffects.playCelebrationChime();
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResultLevel(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-200 relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!resultLevel ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Pertanyaan {currentStep + 1} dari {DIAGNOSTIC_QUESTIONS.length}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-lexend mt-1">
                Ayo Cari Tahu Level Membacamu!
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                Pilih jawaban yang paling sesuai dengan kebiasaan membacamu ya!
              </p>
            </div>

            {/* Question Box */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 mb-5 flex items-start gap-3">
              <button
                onClick={() => handlePlayPrompt(currentQuestion.audioPromptText)}
                className="mt-0.5 p-2 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors shrink-0 shadow-xs"
                title="Dengarkan Pertanyaan"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <div>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQuestion.question}
                </p>
                <span className="text-xs text-orange-600 font-medium">
                  Klik tombol speaker oranye untuk mendengarkan suara
                </span>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt.levelScore)}
                  className="w-full text-left p-4 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all flex items-center justify-between group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl">{opt.icon || '⭐'}</span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        {opt.label}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-amber-900">
                        {opt.text}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-6">
              {DIAGNOSTIC_QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-2.5 rounded-full transition-all ${
                    i === currentStep
                      ? 'w-8 bg-orange-500'
                      : i < currentStep
                      ? 'w-2.5 bg-amber-300'
                      : 'w-2.5 bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div className="text-center py-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg shadow-orange-500/30">
              {resultLevel === 1 ? '🐱' : resultLevel === 2 ? '🦌' : '🪶'}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide uppercase mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Rekomendasi Terbuka
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-lexend">
              {resultLevel === 1 && 'Level 1: Fonik & Kata Pendek'}
              {resultLevel === 2 && 'Level 2: Kalimat Sederhana & Dialog'}
              {resultLevel === 3 && 'Level 3: Paragraf & Cerita Kompleks'}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mt-2 leading-relaxed">
              {resultLevel === 1 &&
                'Hebat! Cerita dengan kata berima dan latihan fonik suku kata sangat cocok untuk membangun rasa percaya diri awalmu.'}
              {resultLevel === 2 &&
                'Keren sekali! Kamu siap membaca kalimat dengan tanda seru, tanya, dan melatih intonasi dialog karakter yang hidup!'}
              {resultLevel === 3 &&
                'Luar biasa! Kamu adalah pembaca mahir yang siap menjelajahi dongeng kaya kosakata nusantara dengan intonasi dramatis!'}
            </p>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left my-5 text-sm">
              <div className="font-bold text-slate-800 mb-1">Panduan Membaca Khusus:</div>
              <ul className="text-slate-600 space-y-1 list-disc list-inside text-xs sm:text-sm">
                <li>Dengarkan suara narator untuk menangkap tinggi rendahnya nada.</li>
                <li>Gunakan tombol rekam untuk menyuarakan setiap halaman dengan gayamu.</li>
                <li>Simpan hasil rekamanmu untuk didengarkan bersama orang tua!</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  onSelectRecommendedLevel(resultLevel);
                  onClose();
                }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Mulai Membaca di Level Ini</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Tes</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

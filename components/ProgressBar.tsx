import React from 'react';
import { formatMoney } from '../utils';

interface ProgressBarProps {
  percentage: number;
  isGoalMet: boolean;
  goalAmount: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, isGoalMet, goalAmount }) => {
  return (
    <div className="text-left mt-6">
      <div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
        <span>Meta Mensal: {formatMoney(goalAmount)}</span>
        <span className={isGoalMet ? "text-libero-gold" : "text-gray-300"}>
            {Math.floor(percentage)}%
        </span>
      </div>
      
      <div className="h-3 bg-[#333] rounded-full overflow-hidden relative">
        <div 
          className={`h-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_0_10px_rgba(39,174,96,0.4)] ${
            isGoalMet 
              ? 'bg-gradient-to-r from-libero-primary to-libero-gold' 
              : 'bg-gradient-to-r from-[#1e8449] to-libero-light'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div 
        className={`mt-2 text-center text-sm font-bold text-libero-light transition-all duration-500 transform ${
          isGoalMet ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        🎉 PARABÉNS! META BATIDA! 🚀
      </div>
    </div>
  );
};
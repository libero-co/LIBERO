import React, { useState, useMemo } from 'react';
import { formatMoney, calculatePercentage } from '../utils';
import { ProgressBar } from './ProgressBar';
import { FinancialBreakdown } from './FinancialBreakdown';
import { InputField } from './InputField';

const COST_PER_UNIT = 197;
const GOAL_AMOUNT = 10000;

export const Calculator: React.FC = () => {
  const [price, setPrice] = useState<number>(897);
  const [quantity, setQuantity] = useState<number>(5);

  const financials = useMemo(() => {
    // Ensure positive numbers
    const safeQty = Math.max(0, quantity || 0);
    
    const grossRevenue = price * safeQty;
    const totalCost = COST_PER_UNIT * safeQty;
    const profitPerUnit = price - COST_PER_UNIT;
    const totalProfit = profitPerUnit * safeQty;
    const percentage = calculatePercentage(totalProfit, GOAL_AMOUNT);
    const isGoalMet = totalProfit >= GOAL_AMOUNT;

    return {
      grossRevenue,
      totalCost,
      profitPerUnit,
      totalProfit,
      percentage,
      isGoalMet
    };
  }, [price, quantity]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setQuantity(isNaN(val) ? 0 : val);
  };

  return (
    <div className="bg-libero-card p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-md text-center border border-neutral-800 relative overflow-hidden">
      
      {/* Header */}
      <h2 className="text-2xl font-bold text-libero-light uppercase tracking-wide mb-2">
        Simulador Liberô!
      </h2>
      <p className="text-gray-400 text-sm mb-8">
        Planeje seus lucros mensais
      </p>

      {/* Inputs */}
      <div className="space-y-5">
        <InputField label="Valor de Venda (Cliente Final)">
          <select 
            value={price}
            onChange={handlePriceChange}
            className="w-full p-4 rounded-xl border border-neutral-700 bg-libero-input text-white text-base focus:outline-none focus:border-libero-primary focus:ring-1 focus:ring-libero-primary transition-all cursor-pointer appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em`, paddingRight: `2.5rem` }}
          >
            <option value="597">R$ 597,00 (Plano Básico)</option>
            <option value="897">R$ 897,00 (Plano Padrão)</option>
            <option value="1197">R$ 1.197,00 (Plano Premium)</option>
          </select>
        </InputField>

        <InputField label="Quantas vendas você fará este mês?">
          <input 
            type="number" 
            value={quantity}
            onChange={handleQuantityChange}
            min="0"
            className="w-full p-4 rounded-xl border border-neutral-700 bg-libero-input text-white text-base focus:outline-none focus:border-libero-primary focus:ring-1 focus:ring-libero-primary transition-all placeholder-gray-500"
          />
        </InputField>
      </div>

      {/* Result Box */}
      <div className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] p-6 rounded-[18px] mt-8 border border-neutral-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">
          Seu Lucro Líquido
        </div>
        <p className="text-4xl sm:text-5xl font-extrabold text-libero-light drop-shadow-[0_0_15px_rgba(39,174,96,0.3)] mb-6 transition-all duration-300">
          {formatMoney(financials.totalProfit)}
        </p>
        
        <ProgressBar 
          percentage={financials.percentage} 
          isGoalMet={financials.isGoalMet} 
          goalAmount={GOAL_AMOUNT}
        />
      </div>

      {/* Breakdown */}
      <FinancialBreakdown 
        grossRevenue={financials.grossRevenue}
        totalCost={financials.totalCost}
        profitPerUnit={financials.profitPerUnit}
        costPerUnit={COST_PER_UNIT}
      />
    </div>
  );
};
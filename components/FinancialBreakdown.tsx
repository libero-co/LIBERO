import React from 'react';
import { formatMoney } from '../utils';

interface FinancialBreakdownProps {
  grossRevenue: number;
  totalCost: number;
  profitPerUnit: number;
  costPerUnit: number;
}

export const FinancialBreakdown: React.FC<FinancialBreakdownProps> = ({ 
  grossRevenue, 
  totalCost, 
  profitPerUnit,
  costPerUnit
}) => {
  return (
    <div className="mt-6 bg-[#222] p-4 rounded-xl border border-[#2a2a2a]">
      <div className="space-y-1">
        
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Faturamento Total:</span>
          <span className="text-white font-medium">{formatMoney(grossRevenue)}</span>
        </div>

        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Custo de Ativação (R$ {costPerUnit}/un):</span>
          <span className="text-red-400 font-medium">- {formatMoney(totalCost)}</span>
        </div>

        <div className="pt-2 mt-2 border-t border-neutral-800 flex justify-between items-center text-sm">
          <span className="text-gray-400">Lucro por Venda:</span>
          <span className="text-libero-light font-bold">{formatMoney(profitPerUnit)}</span>
        </div>

      </div>
    </div>
  );
};
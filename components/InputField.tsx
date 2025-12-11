import React from 'react';

interface InputFieldProps {
  label: string;
  children: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({ label, children }) => {
  return (
    <div className="text-left">
      <label className="block mb-2 text-xs sm:text-sm font-semibold text-gray-400">
        {label}
      </label>
      {children}
    </div>
  );
};
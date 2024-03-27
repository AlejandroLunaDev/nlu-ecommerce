export function PurchaseButton({ onClick, text, isValid }) {
    return (
      <button
        className={`py-3 w-full rounded-md ${
            isValid ? 'bg-[#61005D] text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
        }`}
        onClick={onClick}
        disabled={!isValid}
      >
        {text}
      </button>
    );
  }
  
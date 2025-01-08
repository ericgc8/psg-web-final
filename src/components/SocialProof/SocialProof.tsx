// src/components/SocialProof/SocialProof.tsx
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

interface SocialProofProps {
  id?: string; // Make id optional
}

const SocialProof: React.FC<SocialProofProps> = ({ id }) => {
  const [inputValue, setInputValue] = useState<string>('1000');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      value === '' ||
      (/^\d+$/.test(value) && parseInt(value, 10) <= 100000)
    ) {
      setInputValue(value);
      setIsAnimating(true);
    }
  };

  const numericValue = inputValue === '' ? 0 : parseInt(inputValue, 10);

  const data = {
    labels: ['Generic Website', 'Our High-Converting Website'],
    datasets: [
      {
        data: [numericValue, numericValue * 3.5],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <section id={id} className="py-16 px-6 md:px-12 bg-soft-cream">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-elegant-gray text-center">
          See the Difference: Generic Website vs. High-Converting Sales Website
        </h2>
        <p className="text-xl mb-8 text-gray-600 text-center">
          A high-converting website isn't just pretty—it's a revenue booster!
          See how much more you could be making with a sales-driven website.
        </p>
        <div className="mb-8">
          <label htmlFor="monthlyRevenue" className="block text-lg mb-2">
            Enter your current monthly revenue:
          </label>
          <div className="flex items-center">
            <span className="text-2xl mr-2">$</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              id="monthlyRevenue"
              value={inputValue}
              onChange={handleInputChange}
              className={`border-2 border-hot-pink rounded-md p-2 w-full text-xl ${
                isAnimating ? 'animate-pulse' : ''
              }`}
              style={{ appearance: 'textfield' }}
            />
          </div>
        </div>
        <div className="mb-8" style={{ height: '50vh', width: '100%' }}>
          <Bar options={options} data={data} />
        </div>
        <p className="text-lg mb-8 text-gray-600">
          Don't let a basic website hold you back. With our high-converting
          designs, you'll not only look professional—your clients will book more
          appointments, buy more services, and keep coming back. Let's unlock
          your business's potential today!
        </p>
        <div className="text-center animate-bounce">
          <span role="img" aria-label="Scroll down" className="text-4xl">
            👇
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

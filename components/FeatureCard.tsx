import React, { ReactNode } from "react";
type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
};
export const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <div className="inline-block rounded-[5px] bg-white/5 px-10 py-8">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="50" height="50" rx="3" fill="white" fill-opacity="0.03" />
        <path
          d="M18 18.5C18 17.5717 18.3687 16.6815 19.0251 16.0251C19.6815 15.3687 20.5717 15 21.5 15H25V22H21.5C20.5717 22 19.6815 21.6313 19.0251 20.9749C18.3687 20.3185 18 19.4283 18 18.5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 15H28.5C28.9596 15 29.4148 15.0905 29.8394 15.2664C30.264 15.4423 30.6499 15.7001 30.9749 16.0251C31.2999 16.3501 31.5577 16.736 31.7336 17.1606C31.9095 17.5852 32 18.0404 32 18.5C32 18.9596 31.9095 19.4148 31.7336 19.8394C31.5577 20.264 31.2999 20.6499 30.9749 20.9749C30.6499 21.2999 30.264 21.5577 29.8394 21.7336C29.4148 21.9095 28.9596 22 28.5 22H25V15Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M25 25.5C25 25.0404 25.0905 24.5852 25.2664 24.1606C25.4423 23.736 25.7001 23.3501 26.0251 23.0251C26.3501 22.7001 26.736 22.4423 27.1606 22.2664C27.5852 22.0905 28.0404 22 28.5 22C28.9596 22 29.4148 22.0905 29.8394 22.2664C30.264 22.4423 30.6499 22.7001 30.9749 23.0251C31.2999 23.3501 31.5577 23.736 31.7336 24.1606C31.9095 24.5852 32 25.0404 32 25.5C32 25.9596 31.9095 26.4148 31.7336 26.8394C31.5577 27.264 31.2999 27.6499 30.9749 27.9749C30.6499 28.2999 30.264 28.5577 29.8394 28.7336C29.4148 28.9095 28.9596 29 28.5 29C28.0404 29 27.5852 28.9095 27.1606 28.7336C26.736 28.5577 26.3501 28.2999 26.0251 27.9749C25.7001 27.6499 25.4423 27.264 25.2664 26.8394C25.0905 26.4148 25 25.9596 25 25.5V25.5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 32.5C18 31.5717 18.3687 30.6815 19.0251 30.0251C19.6815 29.3687 20.5717 29 21.5 29H25V32.5C25 33.4283 24.6313 34.3185 23.9749 34.9749C23.3185 35.6313 22.4283 36 21.5 36C20.5717 36 19.6815 35.6313 19.0251 34.9749C18.3687 34.3185 18 33.4283 18 32.5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18 25.5C18 24.5717 18.3687 23.6815 19.0251 23.0251C19.6815 22.3687 20.5717 22 21.5 22H25V29H21.5C20.5717 29 19.6815 28.6313 19.0251 27.9749C18.3687 27.3185 18 26.4283 18 25.5Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className="mt-7">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-2 text-base font-medium text-white/60">
          {description}
        </p>
      </div>
    </div>
  );
};

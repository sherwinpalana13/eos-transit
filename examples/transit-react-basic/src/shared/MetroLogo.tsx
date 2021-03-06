import React from 'react';
import styled from 'react-emotion';

const MetroLogoRoot = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > svg': {
    width: '80%'
  }
});

export function MetroLogo() {
  return (
    <MetroLogoRoot>
      <svg viewBox="0 0 116.08 121.62" version="1.1">
        <defs>
          <style>{'.cls-1{fill:currentColor;}'}</style>
        </defs>
        <path
          className="cls-1"
          d="M188.7,127.53V111.61A32.3,32.3,0,0,0,135.08,87.3a32.29,32.29,0,0,0-53.61,24.31v46.86h22.15V111.61a10.2,10.2,0,1,1,20.39,0v46.86h22.15V111.61a10.2,10.2,0,1,1,20.39,0v15.88a19.59,19.59,0,1,0,22.15,0Zm-11.06,22.62a6.55,6.55,0,1,1,6.55-6.55A6.56,6.56,0,0,1,177.64,150.15Z"
          transform="translate(-81.11 -79.26)"
        />
        <path
          className="cls-1"
          d="M82.48,200.41A1.38,1.38,0,0,1,81.11,199V177.79a1.38,1.38,0,0,1,1.37-1.38H84.8a1.57,1.57,0,0,1,1.54,1.38l.08.89A7.89,7.89,0,0,1,92.17,176c3.34,0,5.18,1.15,6.21,3.08a8.21,8.21,0,0,1,6.08-3.08c5.62,0,7.12,2.95,7.12,8.14V199a1.36,1.36,0,0,1-1.38,1.37h-3a1.35,1.35,0,0,1-1.37-1.37v-14.4c0-2.74-.43-3.94-2.79-3.94a5.29,5.29,0,0,0-3.9,2.05,11,11,0,0,1,.09,1.8V199A1.34,1.34,0,0,1,98,200.41H95A1.38,1.38,0,0,1,93.62,199V184.77c0-2.74-.47-4.07-2.83-4.07a5.4,5.4,0,0,0-4,2.27V199a1.35,1.35,0,0,1-1.37,1.37Z"
          transform="translate(-81.11 -79.26)"
        />
        <path
          className="cls-1"
          d="M126.05,200.84c-6,0-9.77-3.43-9.77-9V185c0-5.62,3.73-9,9.77-9s9.68,3.42,9.68,9v3.08a1.33,1.33,0,0,1-1.32,1.33H122v2.18c0,3.26,1.46,4.72,4.07,4.72,2.87,0,3.9-1.76,3.9-3,0-.77.43-1.16,1.24-1.16h3.22a1.18,1.18,0,0,1,1.2,1.29C135.61,196.72,132.31,200.84,126.05,200.84Zm-4.11-15.56v.6l8.14-.13v-.55c0-3.09-1.37-4.72-4-4.72S121.94,182.07,121.94,185.28Z"
          transform="translate(-81.11 -79.26)"
        />
        <path
          className="cls-1"
          d="M140.66,192.31V180.7h-.95a1.34,1.34,0,0,1-1.32-1.37v-1.54a1.35,1.35,0,0,1,1.32-1.38h1.2l.43-4.62a1.57,1.57,0,0,1,1.54-1.37H145a1.35,1.35,0,0,1,1.37,1.37v4.62h4.8a1.36,1.36,0,0,1,1.37,1.38v1.54a1.35,1.35,0,0,1-1.37,1.37h-4.8v11.57c0,2.82,1.08,4.11,3.52,4.11a12.65,12.65,0,0,0,1.84-.13,1,1,0,0,1,1.24,1.07v1.85a1.61,1.61,0,0,1-1.37,1.54,19.2,19.2,0,0,1-2.7.17C143.23,200.88,140.66,197.92,140.66,192.31Z"
          transform="translate(-81.11 -79.26)"
        />
        <path
          className="cls-1"
          d="M167.78,177.06v2.78a1,1,0,0,1-1.12,1.07,6.12,6.12,0,0,0-5,2.7V199a1.35,1.35,0,0,1-1.37,1.37h-3A1.39,1.39,0,0,1,156,199V177.79a1.39,1.39,0,0,1,1.37-1.38h2.19a1.61,1.61,0,0,1,1.58,1.33l.18,1.46A7.44,7.44,0,0,1,166.7,176,1,1,0,0,1,167.78,177.06Z"
          transform="translate(-81.11 -79.26)"
        />
        <path
          className="cls-1"
          d="M169.66,191.8V185c0-5.62,3.73-9,9.77-9s9.68,3.42,9.68,9v6.77c0,5.61-3.73,9-9.68,9S169.66,197.41,169.66,191.8Zm5.7-6.3v5.82c0,3.26,1.46,5,4.07,5s4-1.71,4-5V185.5c0-3.26-1.41-5-4-5S175.36,182.24,175.36,185.5Z"
          transform="translate(-81.11 -79.26)"
        />
      </svg>
    </MetroLogoRoot>
  );
}

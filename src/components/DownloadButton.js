import React, { useState } from 'react';
import { RxDownload } from 'react-icons/rx';
import CV from '../assets/Loel_Campaña-Resume.pdf';

export default function DownloadButton() {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);

    // Play a short animation before fetching the file
    setTimeout(async () => {
      try {
        const res = await fetch(CV);
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Loel_Campana-Resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setDone(true);
      } catch (err) {
        console.error('Download failed', err);
      } finally {
        setDownloading(false);
        setTimeout(() => setDone(false), 1800);
      }
    }, 600);
  };

  return (
    <button
      type="button"
      className={`btn-ghost ${downloading ? 'downloading' : ''} ${done ? 'done' : ''}`}
      onClick={handleDownload}
      aria-live="polite"
    >
      {downloading ? (
        <>
          Downloading
          <span className="spinner" aria-hidden />
        </>
      ) : done ? (
        <>
          Downloaded <span className="check">✓</span>
        </>
      ) : (
        <>
          Download CV <RxDownload className="inline-block ml-2" />
        </>
      )}
    </button>
  );
}

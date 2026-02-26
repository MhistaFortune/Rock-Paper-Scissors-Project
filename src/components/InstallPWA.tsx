import React, { useEffect, useState } from 'react';
import './InstallPWA.css';

interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed',
        platform: string
    }>;
    prompt(): Promise<void>;
}

const InstallPWA: React.FC = () => {
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            e.preventDefault();
            setSupportsPWA(true);
            setPromptInstall(e as BeforeInstallPromptEvent);
        };

        window.addEventListener('beforeinstallprompt', handler);

        // Check if already installed
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setSupportsPWA(false);
        }

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const onClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!promptInstall) return;
        promptInstall.prompt();
    };

    if (!supportsPWA) return null;

    return (
        <div className="install-banner">
            <div className="install-content">
                <img src="/pwa-192x192.png" alt="App Icon" className="install-icon" />
                <div className="install-text">
                    <p className="install-title">Install RPS Game</p>
                    <p className="install-desc">Add to home screen for offline play!</p>
                </div>
            </div>
            <div className="install-actions">
                <button className="install-btn" onClick={onClick}>
                    Install
                </button>
                <button className="close-btn" onClick={() => setSupportsPWA(false)}>
                    ✕
                </button>
            </div>
        </div>
    );
};

export default InstallPWA;

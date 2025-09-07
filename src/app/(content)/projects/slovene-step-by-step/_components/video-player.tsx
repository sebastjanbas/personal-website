// Video Placeholder Components

import { Play } from "lucide-react";

export const VideoPlaceholder = ({
  title,
  description,
  duration,
  icon: Icon,
}: {
  title: string;
  description: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
}) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative">
        {/* Video Placeholder */}
        <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl aspect-video mb-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Play className="w-8 h-8 text-slate-600 ml-1" />
              </div>
              <p className="text-slate-600 font-medium">Demo Video</p>
              <p className="text-sm text-slate-500">{duration}</p>
            </div>
          </div>

          {/* Video overlay elements */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            {duration}
          </div>
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
            HD
          </div>
        </div>

        {/* Content */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

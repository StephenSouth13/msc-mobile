// components/MentorCard.tsx
import Image from "next/image";

type MentorCardProps = {
  name: string;
  role: string;
  avatar: string;
  description?: string;
  linkedin?: string;
  github?: string;
};

export default function MentorCard({
  name,
  role,
  avatar,
  description,
  linkedin,
  github,
}: MentorCardProps) {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl">
      {/* Avatar */}
      <div className="relative w-full h-56">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {role}
        </p>

        {description && (
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}

        {/* Social links */}
        <div className="mt-4 flex justify-center gap-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDribbble, FaKaggle } from 'react-icons/fa';

const ProfileCard = ({ member }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Fungsi untuk mendapatkan ikon berdasarkan nama sosial
  const getSocialIcon = (socialName) => {
    switch (socialName.toLowerCase()) {
      case 'github':
        return <FaGithub />;
      case 'linkedin':
        return <FaLinkedin />;
      case 'dribbble':
        return <FaDribbble />;
      case 'kaggle':
        return <FaKaggle />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-md p-5 min-h-[350px] flex flex-col">
      {/* Gambar dengan ukuran konsisten */}
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-40 object-cover rounded-md mb-4" // Konsisten tinggi dan lebar gambar
      />
      <h2 className="text-lg font-bold">{member.name}</h2>
      <p className="text-gray-600">{member.role}</p>
      <p className="text-gray-600">Tech: {member.tech.join(', ')}</p>
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-700"
        onClick={() => setModalOpen(true)}
      >
        Detail
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">{member.name}</h3>
            <p>{member.description}</p>
            <div className="flex gap-4 mt-4">
              {member.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="text-2xl text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => setModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

import Header from './components/Header';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';

import dhio from './assets/dhio new.jpeg';
import awal from './assets/awal.jpeg';
import dihan from './assets/dihan new.jpeg';
import angger from './assets/angger.jpeg';
import ayu from './assets/ayu.jpeg';

const teamMembers = [
  {
    photo: awal,
    name: 'Awal Ramadhani',
    role: 'Frontend Developer',
    tech: ['React', 'Tailwind'],
    description: 'Membangun antarmuka pengguna yang intuitif.',
    socials: [{ name: 'GitHub', link: 'https://github.com/Awalrmdhn' }],
  },
  {
    photo: dhio,
    name: 'Dhio Anugrah',
    role: 'Fullstack Developer',
    tech: ['React', 'Vite', 'Tailwind'],
    description: 'Menciptakan sistem backend yang andal.',
    socials: [{ name: 'Github', link: 'https://github.com/dhioanugrah' }],
  },
  {
    photo: ayu,
    name: 'Ayu Nabila',
    role: 'Frontend Developer',
    tech: ['React', 'Tailwind', 'figma'],
    description: 'Membangun antarmuka pengguna yang intuitif.',
    socials: [{ name: 'Github', link: 'https://github.com/ayunbl' }],
  },
  {
    photo: dihan,
    name: 'Ananda Dihan',
    role: 'UI/UX Designer',
    tech: ['Figma', 'Adobe XD'],
    description: 'Mengutamakan pengalaman pengguna yang memuaskan.',
    socials: [{ name: 'Github', link: 'https://github.com/Noname026' }],
  },
  {
    photo: angger,
    name: 'Angger Karisma',
    role: 'Frontend Developer',
    tech: ['React', 'Tailwind'],
    description: 'Membangun antarmuka pengguna yang intuitif.',
    socials: [{ name: 'Github', link: 'https://github.com/AnggerKarisma' }],
  },
  {
    photo: ayu,
    name: 'Ayu Nabila',
    role: 'Frontend Developer',
    tech: ['React', 'Tailwind'],
    description: 'Membangun antarmuka pengguna yang intuitif.',
    socials: [{ name: 'Github', link: 'https://github.com/ayunbl' }],
  },
];

const App = () => (
  <div className="flex flex-col min-h-screen bg-gray-600">
    <Header />
    <main className="p-6 flex flex-col items-center space-y-6">
      {/* Bagian pertama untuk 3 anggota pertama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Menampilkan 3 anggota pertama */}
        <ProfileCard key={0} member={teamMembers[0]} />
        <ProfileCard key={1} member={teamMembers[1]} />
        <ProfileCard key={3} member={teamMembers[3]} />
      </div>

      {/* Bagian kedua untuk 2 anggota terakhir */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        {/* Menampilkan 2 anggota terakhir */}
        <ProfileCard key={2} member={teamMembers[2]} />
        <ProfileCard key={4} member={teamMembers[4]} />
      </div>
    </main>
    <Footer />
  </div>
);

export default App;

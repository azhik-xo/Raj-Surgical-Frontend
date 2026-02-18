import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/app/home/TestimonialsSection';
import FooterSection from '@/components/FooterSection';

import { Inter } from 'next/font/google';
import Banner from './Banner';
import Healthcare from './Healthcare';
import Herohome from './Herohome';

const inter = Inter({ subsets: ['latin'] });
const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Herohome/>
                <Healthcare/>

                <TestimonialsSection />
                <Banner/>
                <FooterSection />
            </main>
        </div >
    );
};

export default Home;

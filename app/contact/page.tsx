
import React from 'react'
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import DetailCard from './DetailCard';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {

  return (
    <div>
      <h2 className="text-center font-semibold text-5xl my-6">
        Contact details
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between container max-w-[900px] my-10">
        <DetailCard
          logo={<MdEmail />}
          title="Email"
          content="flameshow@gmail.com"
        />

        <DetailCard
          logo={<MdCall />}
          title="Phone number"
          content="01683016843"
        />

        <DetailCard
          logo={<MdLocationOn />}
          title="Location"
          content="Dhaka, Bangladesh"
        />
      </div>

      <h2 className="text-center font-semibold text-5xl my-6">Location</h2>
      <div className='container my-10'>
        <Card>
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396927327!2d90.25487648356307!3d23.780753030511413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1724137715840!5m2!1sen!2sbd"
              width="600"
              height="450"
              loading="lazy"
              className="w-full"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactPage

import React from 'react';
import emailIcon from '../../../assets/contact_email.png'; // Adjust the path as necessary
import phoneIcon from '../../../assets/contact_call.png'; // Adjust the path as necessary
import locationIcon from '../../../assets/contact_map.png'; // Adjust the path as necessary

const contactDetails = [
  {
    icon: emailIcon,
    title: 'Write to us',
    content: 'info@innomindsmarketing.com',
    alt: 'Email Icon',
  },
  {
    icon: phoneIcon,
    title: 'On call inquiry',
    content: '+91-900-512-0002',
    alt: 'Phone Icon',
  },
  {
    icon: locationIcon,
    title: 'Visit us',
    content: '303, The Oval Street, Karnavati Nagar\nJaipur, Rajasthan 302033',
    alt: 'Location Icon',
  },
];

const ContactChildSection = () => {
  return (
    <div className="bg-white text-center py-8 font-['Poppins']">
      <p className="text-[#000000] mb-6 leading-[20px] font-[600] text-[13px] px-4 sm:px-0">
        Please write to us at support@jhsmediamarketing.com for any service-related queries or feedback. Alternatively, you may also use <br/>
        the Wow Digital Center to lodge a complaint or report an issue. We generally respond within 24-48 working hours.
      </p>
      <p className="text-[#E54F26] font-semibold mb-10 text-[15px] leading-[20px]">
        Timings: Monday to Saturday - 9 a.m to 6 p.m - Excluding public holidays
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-10 sm:space-y-0 sm:space-x-20">
        {contactDetails.map((detail, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <img src={detail.icon} alt={detail.alt} className="mx-auto mb-4 " />
              <p className="font-[500] text-[#E54F26] text-[16px] leading-[24px]">
                {detail.title}
              </p>
              <div className="w-[30px] h-[1px] bg-[#E54F26] mx-auto  mb-2"></div>
              <p className="text-[#7B7D8F] font-[500] text-[14px] leading-[24px] whitespace-pre-line">
                {detail.content}
              </p>
            </div>
            {index < contactDetails.length - 1 && (
              <div className="hidden sm:block h-[112px] w-[1px] bg-[#E0E0E0]"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ContactChildSection;

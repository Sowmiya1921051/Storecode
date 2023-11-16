import React from 'react';
import bgImg from '../assets/bg-01.jpg';

function Contact() {
  const supportEmail = 'support@storecode.in';
  const influencersEmail = 'influencers@storecode.in';
  const businessEmail = 'business@storecode.in';
  return (
    <div className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container mx-auto p-6 bg-white rounded-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-sm mb-4">
          We're thrilled that you want to connect with us. At Storecode, your thoughts, questions, and feedback are the driving force behind our commitment to excellence.
          We're here to listen, assist, and engage with you. Choose your preferred way to reach out:
        </p>

        <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 " style={{ color: '#8B5CF6' }}>Contact Form</h3>

          <p className="text-sm">
            Got a specific question or request? Fill out the form below, and we'll get back to you in no time. Your message is important to us, and we're dedicated to providing the answers and solutions you need.
          </p>
       
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#8B5CF6' }}>Email</h3>
          <p className="text-sm">
            Prefer to send us an email? Feel free to reach out to our dedicated support team at{' '}
            <a href={`mailto:${supportEmail}`} className="text-gray-500 hover:text-blue-500 transition duration-300">{supportEmail}</a>.
          </p>
          <p className="text-sm">
            For Influencers: If you're an influencer looking to join our community or have questions related to your account, please contact our dedicated Influencer Support Team at{' '}
            <a href={`mailto:${influencersEmail}`} className="text-gray-500 hover:text-blue-500 transition duration-300">{influencersEmail}</a>.
          </p>
          <p className="text-sm">
            For Brand Collaborations: For business-related inquiries, brand collaborations, or partnership opportunities, please contact our Collaboration Team at{' '}
            <a href={`mailto:${businessEmail}`} className="text-gray-500 hover:text-blue-500 transition duration-300">{businessEmail}</a>. We're always open to exploring new opportunities and ideas.
          </p>
        </div>

        <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#8B5CF6' }}>Social Media</h3>

          <p className="text-sm">
          Connect with us on social media to stay updated on the latest Storecode news, product highlights, and community stories.
          </p>
       
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#8B5CF6' }}>Visit Us</h3>
          <p className="text-sm">If you're in the neighborhood, why not drop by our headquarters? We'd love to meet you in person.</p>
          <p className="font-normal text-lg" style={{ color: '#8B5CF6' }}> Here's our address:</p>
          <p className="text-sm">Storecode Headquarters, Kharadi, Pune, India</p>
          <p className="font-normal text-lg" style={{ color: '#8B5CF6' }}>Working Hours: </p>
          <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM, Saturday: 10:00 AM - 4:00 PM, Sunday: Closed</p>
        </div>

        <p className="font-normal text-lg" style={{ color: '#8B5CF6' }}>Let's Connect, Collaborate, and Create Magic Together!</p>
        <p className="text-sm">Thank you for choosing Storecode. We value your trust and look forward to hearing from you. Your feedback fuels our innovation, and your questions drive us to provide the best experiences. Join us on this exciting journey, and let's make every interaction with Storecode exceptional.</p>
      </div>
    </div>
  );
}

export default Contact;

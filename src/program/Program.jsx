import React, { useState } from 'react';

function Program() {
    const [showParagraph, setShowParagraph] = useState(false);

    const toggleParagraph = () => {
        setShowParagraph(!showParagraph);
    };
//max-w-xl
    return (
        <div className="mx-auto p-4 text-center ">
            <h1 className='p-14 text-2xl font-semibold'>Become a Guide at StoreCode</h1>

            <button className="bg-indigo-500 text-white px-4 py-2 rounded mt-4" onClick={toggleParagraph}>
                {showParagraph ? 'Close' : 'View Details'}
            </button>

            {showParagraph && (
                <p className="mt-4 text-gray-700">
                    Storecode is gearing up to collaborate with major shopping brands. As an Influencer on our platform, you gain a fantastic advantage – your very own personal store on our website. This store is powered by your influence and recommendations. Here's the twist: We encourage you not to reveal the exact websites from which you purchase the products you promote in your new videos henceforth.
                    Instead, keep it a secret under the code you share.
                    Why? Because disclosing sites directly can create unnecessary competition and,
                    in many cases, lead to users buying directly from those mentioned sites, bypassing all your hard work.
                    By sharing your unique code, your followers are directed to the product on your recommended site.
                    As we embark on our collaboration with major brands, your influencer status will transform into a powerful partnership program, offering you the opportunity to earn from every purchase made through your unique codes. Your influence becomes your earning potential.
                    This approach ensures that your hard work as an influencer is rewarded, and it aligns perfectly with our mission to create a win-win ecosystem for influencers and their followers. Get ready to make the most of this exclusive partnership program with Storecode!
                </p>
            )}
        </div>
    );
}

export default Program;

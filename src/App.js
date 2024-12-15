import React, { useState, useRef, useEffect } from 'react';
import { Heart, ArrowRight } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showLoveDialog, setShowLoveDialog] = useState(false);
  const [showTicketLink, setShowTicketLink] = useState(false);

  const screens = [
    {
      title: "A Sincere Acknowledgment",
      content: (
        <div className="text-center space-y-4">
          <div dangerouslySetInnerHTML={{__html: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/644974149&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/elliott-szczepaniak" title="Elliott Szczepaniak" target="_blank" style="color: #cccccc; text-decoration: none;">Elliott Szczepaniak</a> · <a href="https://soundcloud.com/elliott-szczepaniak/twenty-one-pilots-smithereens-live-acoustic" title="Twenty One Pilots - Smithereens (Live Acoustic)" target="_blank" style="color: #cccccc; text-decoration: none;">Twenty One Pilots - Smithereens (Live Acoustic)</a></div>
          `}} />
          <p className="text-xl font-semibold text-pink-700">
            I Know Your Connection with Andrija
          </p>
          <p className="text-lg text-gray-700">
            I understand how deeply Andrija was connected to you, 
            how he was there for you even before we started talking. 
            My words were thoughtless and cruel - they came from 
            a place of impulse, not compassion. 

            I know the pain of losing someone important, and my 
            insensitive comment only added to your grief. I am 
            truly, deeply sorry for being so careless with your feelings.

            I truly care about your feelings and I always said I liked 
            the way you are. If you being emotionless in front of me, 
            I don't even know how will I survive in that situation. 
            You make me vulnerable. I have shared many things with you 
            which I did not even share with anyone in the past 2 years. 
            I really love you.
          </p>
        </div>
      )
    },
    {
      title: "You Are My Everything",
      content: (
        <div className="text-center space-y-4">
          <div dangerouslySetInnerHTML={{__html: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/161084205&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/itspraddy" title="praddy" target="_blank" style="color: #cccccc; text-decoration: none;">praddy</a> · <a href="https://soundcloud.com/itspraddy/ed-sheeran-photograph-acoustic-version" title="Ed Sheeran - Photograph (Acoustic Version)" target="_blank" style="color: #cccccc; text-decoration: none;">Ed Sheeran - Photograph (Acoustic Version)</a></div>
          `}} />
          <p className="text-xl font-semibold text-pink-700">
            My Entire World Revolves Around You
          </p>
          <p className="text-lg text-gray-700">
            If you leave me, I will be a failed son, a failed lover, 
            a failed friend. You mean the world to me - these words 
            come from my heart, not from a depressed brain spewing 
            random thoughts. 

            My previous words were not justifiable. This webpage 
            is a small token of my apology, a glimpse into how 
            much I truly care for you and how sorry I am for 
            causing you additional pain.

            There is no replacement of what I did last night, 
            but I will try to be better and understand you better 
            and will never repeat this emotional pain to you 
            in your next difficult time.
          </p>
        </div>
      )
    },
    {
      title: "Love, Imperfections, and Poetry",
      content: (
        <div className="text-center space-y-4">
          <div dangerouslySetInnerHTML={{__html: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/644974149&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/elliott-szczepaniak" title="Elliott Szczepaniak" target="_blank" style="color: #cccccc; text-decoration: none;">Elliott Szczepaniak</a> · <a href="https://soundcloud.com/elliott-szczepaniak/twenty-one-pilots-smithereens-live-acoustic" title="Twenty One Pilots - Smithereens (Live Acoustic)" target="_blank" style="color: #cccccc; text-decoration: none;">Twenty One Pilots - Smithereens (Live Acoustic)</a></div>
          `}} />
          <p className="text-xl font-semibold text-pink-700">
            A Poem of Apology and Love
          </p>
          <div className="text-lg text-gray-700 italic">
            <p>In moments of weakness, words can cut deep,</p>
            <p>Like shadows that threaten the love that we keep.</p>
            <p>I stumble, I falter, but my heart remains true,</p>
            <p>Every breath, every thought, is dedicated to you.</p>
          </div>
        </div>
      )
    },
    {
      title: "Andrija and You",
      content: (
        <div className="text-center space-y-4">
          <div dangerouslySetInnerHTML={{__html: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/161084205&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          `}} />
          <div className="flex justify-center items-center mb-4">
            <Heart color="pink" size={40} />
          </div>
          <div dangerouslySetInnerHTML={{__html: `
            <blockquote class="imgur-embed-pub" lang="en" data-id="a/ZFbjbrX" data-context="false" ><a href="//imgur.com/a/ZFbjbrX"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
          `}} />
        </div>
      )
    },
    {
      title: "You and Me",
      content: (
        <div className="text-center space-y-4">
          <div dangerouslySetInnerHTML={{__html: `
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/161084205&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
          `}} />
          <div className="flex justify-center items-center mb-4">
            <Heart color="pink" size={40} />
          </div>
          <div dangerouslySetInnerHTML={{__html: `
            <blockquote class="imgur-embed-pub" lang="en" data-id="a/skq1sVf" data-context="false" ><a href="//imgur.com/a/skq1sVf"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
            <blockquote class="imgur-embed-pub" lang="en" data-id="a/skq1sVf" data-context="false" ><a href="//imgur.com/a/skq1sVf"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>
          `}} />
        </div>
      )
    },
    {
      title: "A Playful Question",
      content: (
        <div className="text-center space-y-4">
          <div className="bg-green-100 p-6 rounded-xl">
            {!showLoveDialog ? (
              <button 
                onClick={() => setShowLoveDialog(true)}
                className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Do You Love Me?
              </button>
            ) : (
              <div>
                {!showTicketLink ? (
                  <div className="space-y-4">
                    <button 
                      onClick={() => alert('Choose Yes!')}
                      className="bg-red-500 text-white px-6 py-3 rounded-lg mr-4"
                    >
                      No
                    </button>
                    <button 
                      onClick={() => setShowTicketLink(true)}
                      className="bg-green-500 text-white px-6 py-3 rounded-lg"
                    >
                      Yes
                    </button>
                  </div>
                ) : (
                  <div>
                    <a 
                      href="https://www.makemytrip.com/hotels/jaipur-hotels.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-600"
                    >
                      Book Jaipur Trip
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 via-pink-100 to-blue-100 p-4 relative overflow-hidden">
      {/* Garden-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#10B981" fillOpacity="0.3" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0L192,0L96,0L0,0Z"></path>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#EC4899" fillOpacity="0.3" d="M0,224L48,240C96,256,192,288,288,293.3C384,299,480,277,576,250.7C672,224,768,192,864,197.3C960,203,1056,245,1152,261.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center z-10">
        <h1 className="text-2xl font-bold mb-6 text-pink-700">{screens[currentScreen].title}</h1>
        
        {screens[currentScreen].content}
        
        <div className="flex justify-between mt-8">
          {currentScreen > 0 && (
            <button 
              onClick={handlePrevious}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md flex items-center"
            >
              Previous
            </button>
          )}
          
          {currentScreen < screens.length - 1 && (
            <button 
              onClick={handleNext}
              className="bg-pink-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              Next <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
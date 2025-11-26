const FeaturesSection = () => {
  const quests = [
    {
      title: 'Village Quest - Vocabulary',
      icon: '🏘️',
      desc: 'Master 50+ new words through fun matching and association games. Build your word power!',
      badge: 'Word Explorer'
    },
    {
      title: 'Forest Quest - Synonyms & Antonyms',
      icon: '🌲',
      desc: 'Discover word relationships in the enchanted forest. Learn synonym and antonym pairs!',
      badge: 'Synonym Sleuth'
    },
    {
      title: 'Castle Quest - Compound Words',
      icon: '🏰',
      desc: 'Learn to build and understand 30+ compound words through drag-and-drop challenges!',
      badge: 'Word Builder'
    },
    {
      title: 'Kingdom Quest - Final Challenge',
      icon: '👑',
      desc: 'Apply all your skills to solve the kingdom crisis! Integrate everything you\'ve learned!',
      badge: 'Master Reader'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-amber-900 text-center mb-6">
          Quest Features
        </h2>
        <p className="text-2xl text-amber-800 text-center mb-16">
          Four exciting quests to master reading comprehension!
        </p>

        <div className="grid grid-cols-2 gap-8 mb-16">
          {quests.map((quest, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition border-4 border-amber-200">
              <div className="text-7xl mb-4">{quest.icon}</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-3">{quest.title}</h3>
              <p className="text-amber-800 mb-4">{quest.desc}</p>
              <div className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full font-bold">
                🏆 {quest.badge}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-400 to-blue-400 rounded-3xl p-12 text-center shadow-xl">
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl text-white mb-6">
            Join thousands of happy learners today!
          </p>
          <button className="bg-white text-purple-600 text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition">
            Begin Your Quest Now! ✨
          </button>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
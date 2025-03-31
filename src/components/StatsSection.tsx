
const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "40+", label: "Team Members" },
  { value: "15+", label: "Industry Awards" },
  { value: "98%", label: "Client Satisfaction" },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center animate-fadeInUp stagger-${index + 1}`}>
              <p className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-white/80 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

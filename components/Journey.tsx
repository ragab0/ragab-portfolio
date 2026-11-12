import TimelineSection from "./TimelineSection";
import { EXPERIENCE_ITEMS, EDUCATION_ITEMS } from "@/assets/data/journey-data";

export default function Journey() {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-mainBg"
    >
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-24 text-center">
          <h2 className="text-textPrimary text-4xl md:text-5xl font-bold mb-6 mx-auto text-center">
            {/* Experience & Education */}
            My Journey
          </h2>
          <p className="max-w-2xl text-lg text-textSecondary leading-relaxed mx-auto text-center">
            A look at my professional experience and academic background.
          </p>
        </div>

        {/* Section content */}
        <div className="space-y-32">
          <TimelineSection
            title="Experience"
            items={EXPERIENCE_ITEMS}
            type="work"
            index={0}
          />

          <TimelineSection
            title="Education"
            items={EDUCATION_ITEMS}
            type="edu"
            index={1}
          />
        </div>
      </div>
    </section>
  );
}

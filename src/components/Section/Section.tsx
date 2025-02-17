import S from "./Section.module.css";

export const Section = ({ children }: { children: React.ReactNode}) => (
  <section className={S.Section}>
    <div className={S.SectionWrapper}>
      {children}
    </div>
  </section>
)

import { Section, Eyebrow } from "@/components/ui/Section";

interface Review {
  name: string;
  text: string;
}

// Verbatim Google reviews — wording, punctuation, and reviewer names are kept exactly
// as they appear on Google. Do not paraphrase, embellish, or add new reviews here
// without the actual review text and name supplied.
const reviews: Review[] = [
  {
    name: "Ana Silva",
    text: "We had Nik and his team handle several updates in our home, including the bathrooms and flooring, and they did a fantastic job. The work was clean, professional, and finished on time. They were also very fair with their pricing. We're extremely happy with the results and would definitely use them again!",
  },
  {
    name: "Christo Motska",
    text: "Sunshine Custom Builders may be new to Google, but they are definitely not new to the business. Their years of experience really show in the quality of their work. The craftsmanship was impeccable, they were professional and trustworthy, and the finished work was amazing. I would absolutely recommend them to anyone looking for a contractor they can trust!",
  },
  {
    name: "enkeleda mira",
    text: "We were very impressed with Sunshine Custom Builders. From start to finish, they were professional, responsive, and took pride in their work. Their attention to detail really stood out, and the finished project turned out better than we expected. It's clear they have a lot of experience in the construction business. Highly recommend!",
  },
];

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="text-gold-dark">
      {"★★★★★"}
    </div>
  );
}

export function BathroomReviews() {
  return (
    <Section tone="sand">
      <div className="max-w-2xl">
        <Eyebrow>Customer Reviews</Eyebrow>
        <h2 className="text-3xl md:text-4xl">What Tampa Bay Homeowners Are Saying</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.name} className="flex flex-col rounded-sm bg-white p-6 shadow-sm">
            <Stars />
            <p className="mt-4 flex-1 text-sm text-navy/75">&ldquo;{review.text}&rdquo;</p>
            <div className="mt-5 border-t border-navy/10 pt-4">
              <p className="text-sm font-semibold text-navy">{review.name}</p>
              <p className="text-xs text-navy/50">Google review</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

const publications = [
  {
    title: "Improving Patient-Clinical Trial Matching Using Convolution Neural Networks",
    authors: "Yousif Salman, Emad Mohammed, and Cassandra Hui",
    venue: "The 38th Canadian Conference on Artificial Intelligence (CAIAC 2025)",
    year: "2025",
    link: "https://caiac.pubpub.org/pub/99t1p0oz/release/1",
    summary:
      "Developed a neuro-symbolic AI approach combining fine-tuned LLMs with symbolic reasoning to improve patient-clinical trial matching. The method enhances interpretability and accuracy by validating LLM and cosine similarity outputs through additional layers of symbolic reasoning, providing more reliable and transparent trial-matching results.",
  },
  {
    title:
      "Evaluating Missing Data Imputation Methods for Esophageal Cancer Quality of Life Research",
    authors: "Yousif Salman et al.",
    venue: "medRxiv",
    year: "2025",
    link: "https://www.medrxiv.org/content/10.1101/2025.09.10.25335531v1",
    summary:
      "Comprehensive evaluation of seven imputation methods for handling missing data in esophageal cancer patient-reported outcomes. Compared methods including MICE, VAE, DAE, BPCA, deep autoencoders, SoftImpute, and KNN across multiple validation metrics to provide evidence-based recommendations for quality-of-life research.",
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Published Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contributing to AI research in healthcare and clinical applications
            </p>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{pub.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {pub.authors} • {pub.venue} • {pub.year}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {pub.summary}
                    </p>
                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Read Paper
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


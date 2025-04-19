import React from "react";

const RedPillSection: React.FC = () => {
  return (
    <main className="relative" id="wp--skip-link--target">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Cover Section */}
        <div className="relative rounded-xl overflow-hidden mx-auto">
          <div className="relative">
            <img
              loading="lazy"
              width={1024}
              height={768}
              className="w-full h-48 md:h-64 lg:h-[500px] object-cover"
              alt="Red Pill"
              src="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png"
              srcSet="https://memey.cloud/wp-content/uploads/2024/08/red-pill.png 1024w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=150&h=113 150w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=300&h=225 300w, https://memey.cloud/wp-content/uploads/2024/08/red-pill.png?w=768&h=576 768w"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            {/* Backdrop Filter Overlay */}
            <div className="absolute inset-0 bg-[#f3e0e6]/40" />
            {/* Centered Text */}
            <p className="absolute inset-0 flex items-center justify-center text-center text-xl md:text-2xl xl:text-[40px] font-bold text-[#17191b] px-4">
              So you’ve chosen to hear some unpleasant truths…
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-6 text-gray-700 font-medium text-base">
          <p>
            We’re losing. Fraud detectives, peer review, and image analyzers are
            not enough to stop the tide of false research that is making its way
            into all fields. Falsification, fabrication, data cooking,
            plagiarism, and now AI “paper mills” are taking a tremendous toll on
            the advancement of science and knowledge. This unsolved problem has
            been silently poisoning research for years.
          </p>
          <p>
            Don’t believe it? Long before researchers even had the option to
            cheat with AI, a shocking meta-analysis by Fanelli [1] showed that
            nearly 1 in 50 researchers <em>admitted</em> to fabricating false
            data, falsifying data, or modifying data to improve the outcome of
            their research.
          </p>
          <p>
            That is already a shocking number; it would mean that a sizeable
            research body could have dozens of charlatans drilling holes in its
            credibility by cheating with data. But it gets much worse. When
            asked if they had seen others do the same, the number more than
            doubles, and on the high end, it goes up to 33%. That means 1 in 3
            researchers in those studies{" "}
            <em>knew the results were fake, but didn’t do anything.</em> Now, it
            isn’t always that bad; according to Fanelli’s weights, the pooled
            estimate for all studies in the meta-analysis would actually land at
            around 14%, but that is still a large, toxic plurality that cannot
            be ignored, especially since these falsifiers were not caught.{" "}
            <strong>
              Overall, most of them got away with it, without even getting
              reported after being caught red-handed by a colleague.
            </strong>{" "}
            What is peer-review worth if peers who{" "}
            <em>know that the research is fake</em> won’t report it? Can we
            continue to rely on peer-review?
          </p>
          <p>
            Let’s take a step back. It doesn’t help to rail on peers or even
            “cheaters”. That’s been tried. It doesn’t work. Here are a few
            reasons why:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Detectives aren’t funded by their parent institution. It doesn’t
              pay well or generate good press for a university to muckrake
              scandals in research.
            </li>
            <li>
              Many allegations are challenged for years, and the detective can
              even be sued. Some have received threats of serious harm.
            </li>
            <li>
              There are too many. Small deceptions aren’t likely to make enough
              of a splash to get audited. Even big “discoveries” aren’t
              necessarily fishy unless one author is too successful, with
              results that are always significant. With hyper-sharing of
              authorship [2], it is becoming very difficult to discern who did
              what in a study. Tens of thousands of researchers publish a paper
              every eight days [3], and since many of those are just gifted
              authorship (sharing undeserved credit), it is nearly impossible to
              know whom to target.
            </li>
            <li>
              Our software is not good enough. Even amazing tools like
              ImageTwin, Proofig, and Copyleaks can only determine if the image
              or text content has been plagiarized or AI generated. It cannot
              determine if a researcher modified the original data.
            </li>
          </ul>
          <p>
            So…. Do the cheaters win? Must we distrust every study? Is funding
            science the same as funding science fiction, one eighth of the time?
          </p>
          <p>It doesn’t have to be.</p>
          <p>
            There’s another option: swim with the current. Give researchers
            opportunities to locate hidden successes within failure, so they
            won’t be tempted to change results. How? Simple: help them test{" "}
            <em>every</em> possible relationship in the dataset for
            significance, find all the statistically significant results, and
            then write about those new findings. Then let those significant
            results which were discovered by accident be credited as real
            discoveries, instead of being treated like inconclusive hypotheses
            with some side notes. This approach removes the human “need” for
            cheating.
          </p>
          <p>
            Not only does this solution protect researchers from
            career-motivated pressures to report success, but it also advances
            real science by improving the chances of accidental discovery.
            Currently, researchers don’t test every data relationship for
            significance. They use intuition and their own opinions to decide
            what results to look for. Their hypotheses and personal opinions
            dictate what they can discover. The remaining data are thrown out
            without being investigated, preventing accidental discoveries.
          </p>
          <p>
            So why isn’t this done? Can’t modern computers handle bulk
            statistics? Why not scan the whole dataset for statistically
            significant relationships?
          </p>
          <p>
            The answer is simple: data analysis tools weren’t built for scanning
            entire datasets. They were built to run very precise tests one at a
            time. Scanning requires a complex pathway of decisions running on
            hundreds of combinations of variables at once.
          </p>
          <p>
            Humbly, I will report that I created MeasureMenuY to solve this
            problem. It’s data analysis software that’s built from the ground up
            for scanning. The main workflow is
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Choose the data to load in</li>
            <li>Press analyze</li>
          </ol>
          <p>
            That’s really it. Measure Menu Y scans for every statistically
            significant relationship and generates a report for it, which
            includes an interactive hypothesis table, help with result
            interpretation statements, and some context about the power of the
            results. When applicable, it also performs some rudimentary machine
            learning classification to determine if categorical variables can be
            predicted by numeric variables in the dataset. Purely categorical
            comparisons generate charts.
          </p>
          <p>
            An important disclaimer is that{" "}
            <em>everything it does is an estimate</em>. That doesn’t mean it
            isn’t a statistically sound estimate, and in fact many classical
            techniques use estimates for rigorous applications, but if you want
            your main reported result to be defensible to the letter, I
            recommend reanalyzing that specific result with professional skill.
            Measure Menu Y won’t replace data scientists. In fact, it will give
            them more work; more interesting results will be found that will
            need their expert eyes and judgement. The sheer volume of
            possibilities for comparisons has made it impractical – until now –
            to find all those significant results. With Measure Menu Y’s
            scanning capabilities, the important results can be quickly brought
            to light and scrutinized for the expanse of knowledge and research.
          </p>
          <p>
            Crucially, I must also mention that Measure Menu Y is not an AI. Why
            not? Because commercial AI technology has three flaws which make it
            unsuitable for scanning. What, you say? There’s something AI can’t
            do well? Does that surprise you? It should surprise you, but it’s
            true. Here are the three flaws.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Commercial AI chatbots and agents will cut corners to offset their
              extremely heavy computational loads. When it comes to statistics,
              cutting corners means making assumptions, which means{" "}
              <em>getting the wrong answer frequently</em>. Rate limiting also
              influences this, forcing it to shorten its workload to conserve
              tokens.
            </li>
            <li>
              AI is a black box solution. You can’t truly know what calculations
              it made or if an arbitrarily different prompt caused it to use
              different methods this time. Since AI uses randomness heavily,
              it’s even possible that the same prompt could yield two different
              methods for solutions, meaning that it might not run the same
              tests that it ran before. It’s difficult to compare or share.
            </li>
            <li>
              AI chatbots are usually built to interact with humans; they aren’t
              just smarter programs. They may require the user’s input to do
              certain jobs properly, and therefore will ask the user which
              decision to make. That’s a good trait – it can mitigate
              hallucination – but it also means that when dealing with scanning,
              which requires many linked decisions, it can become burdensome.
              Just try using AI for data analysis yourself; you’ll find that by
              the time you’ve gotten it to load, summarize, clean, group,
              analyze, test, and report, you’ll probably have written ten
              careful prompts, and that’s assuming you don’t nitpick about the
              visuals. (With MeMeY, you click one time to load, one time to
              confirm variables, and one time to do the rest.)
            </li>
          </ol>
          <p>
            Now I’m going to say something shocking. The fact that it is now
            possible to make use of scanning to examine the complete web of
            analytic relationships in a study, and yet it is not common
            practice, means that whatever is being done in place of scanning is
            now a hindrance to growth. Whatever that method is, it’s being
            improperly applied. And what is that method? Intuition. Guessing
            what ought to be analyzed and what should be ignored. The reliance
            on human opinion in science is so strong that nobody questions why a
            study is considered a failure if it doesn’t succeed in proving what
            it set out to prove. Is the scientist a prophet? Is their worth
            determined by what they could have guessed was true,{" "}
            <em>before applying their training to test it?</em> Who can blame so
            many scientists for guessing wrong, ending up with a “useless”
            result, and being tempted to reinforce their initial opinion, their
            imagination, their idea that preceded the actual science taking
            place? Since there is no longer the excuse that it’s too exhausting
            to examine the full breadth of the data for insights other than the
            ones originally imagined, and since this unfair system of
            expectations has clearly contributed to the rampant fraud, we are
            left to say frankly:{" "}
            <em>
              The scientific community has reached the point where it is limited
              by its own imagination, and that causes it to feed itself with
              lies to stay alive.
            </em>
          </p>
          <p>References</p>
          <p>
            [1] Fanelli D (2009) How Many Scientists Fabricate and Falsify
            Research? A Systematic Review and Meta-Analysis of Survey Data. PLoS
            ONE 4(5): e5738.{" "}
            <a
              href="https://doi.org/10.1371/journal.pone.0005738"
              className="text-blue-600 hover:underline"
            >
              https://doi.org/10.1371/journal.pone.0005738
            </a>
          </p>
          <p>
            [2] Ioannidis, J. P. A., Klavans, R., & Boyack, K. W. (2018).
            Thousands of scientists publish a paper every five days.{" "}
            <em>Nature</em>, 561(7722), 167-169.
          </p>
          <p>
            <a
              href="https://doi.org/10.1038/d41586-018-06185-8"
              className="text-blue-600 hover:underline"
            >
              https://doi.org/10.1038/d41586-018-06185-8
            </a>
          </p>
          <p>
            [3]{" "}
            <em>
              Some scientists publish more than 70 papers a year. Here’s how—and
              why—they do it
            </em>
            . (n.d.).{" "}
            <a
              href="http://www.science.org"
              rel="nofollow"
              className="text-blue-600 hover:underline"
            >
              http://www.science.org
            </a>
            .{" "}
            <a
              href="https://www.science.org/content/article/some-scientists-publish-more-70-papers-year-here-s-how-and-why-they-do-it"
              className="text-blue-600 hover:underline"
            >
              https://www.science.org/content/article/some-scientists-publish-more-70-papers-year-here-s-how-and-why-they-do-it
            </a>
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <a
            href="https://www.dropbox.com/scl/fo/vs0kd7ouak67dj3dtihhq/APcMhaGyeXZ6To5ge-T3mTU?rlkey=31b82d5dypdj74g7dcahiacwe&st=lo13dbcn&dl=0"
            className="inline-block rounded-lg bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            GET MEMEY
          </a>
        </div>
      </div>
    </main>
  );
};

export default RedPillSection;

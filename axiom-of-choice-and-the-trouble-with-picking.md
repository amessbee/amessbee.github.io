---
layout: blog-post
title: "The Axiom of Choice and the Trouble with Picking"
description: "The Axiom of Choice looks obvious until the sets are infinite — and no amount of randomness, order statistics, or clever formulas gets you out of needing it."
date: 2026-09-23 06:10:00 +0500
permalink: /blogs/axiom-of-choice-and-the-trouble-with-picking/
blog: true
show_hero: false
---

## Preamble

The Axiom of Choice (AC) has a way of sounding like a non-statement. Given any collection of nonempty sets, you can form a new set by picking one element from each — surely that's just true? I wanted to understand why this particular truism is independent of the other axioms of set theory, provably neither provable nor refutable, and why it underwrites results as strange as cutting a ball into finitely many pieces and reassembling them into two balls the same size as the original.

The conversation that produced this post kept circling one instinct: surely I can just write down a rule for picking. Minimum, median, a random draw — each felt like it should dissolve the problem. Each one, examined closely, turned out to either secretly need AC anyway or to quietly stop being "random" at all. This post follows that back-and-forth.

* In this article
{:toc}

## 1. What does the axiom actually assert?

Given any collection of nonempty sets, there exists a **choice function** — a function that selects exactly one element from each set in the collection. Formally, a function *f* is a set of ordered pairs, one pair per set *S* in the collection, of the form (*S*, *f*(*S*)) with *f*(*S*) ∈ *S*. AC asserts that this set of pairs exists, for any collection at all, however large or structureless.

That's the whole axiom. Nothing about it demands a method for finding the elements — only that a complete, simultaneous selection exists as a mathematical object.

## 2. Why does the finite case never need it?

For finitely many sets, no version of AC is required. You can write the choice function out explicitly: {(S₁, x₁), (S₂, x₂), …, (Sₙ, xₙ)}, a finite list with each pair fully specified. This is provable from the ordinary axioms of set theory (ZF) alone — you never invoke AC to pick from a finite family, no matter how you pick.

The trouble starts only with **infinitely many** sets, and specifically when there is no describable rule tying the sets together.

## 3. What goes wrong for infinitely many sets?

The standard illustration is Russell's socks-and-shoes pair. Given infinitely many pairs of shoes, you don't need AC: "always take the left shoe" is an explicit, describable rule, and it works uniformly across the whole infinite family. Given infinitely many pairs of *socks* — identical, no left or right — there is no feature to hang a rule on. AC asserts a choice function exists anyway, without ever exhibiting it.

This is why AC is controversial in a way most axioms aren't: it is a pure existence claim. It guarantees a selection with no algorithm, no formula, and (provably, in general) no way to ever construct one.

## 4. What does AC buy you, and what does it cost?

The axiom is famous mostly for its consequences, which cut both ways.

What it enables, and what would otherwise fail:

- Every vector space has a basis, even infinite-dimensional ones with no describable basis.
- The Well-Ordering Theorem: every set, including the real numbers, admits *some* ordering under which every subset has a least element — despite no one being able to describe such an ordering of ℝ.
- Cardinal comparability: any two infinite sets can have their sizes compared.
- Countable unions of countable sets are countable; Tychonoff's theorem holds in general topology.

What it also enables, and what makes people uneasy:

- The **Banach–Tarski paradox**: a solid ball can be partitioned into finitely many pieces and reassembled, using only rotations and translations, into two balls identical to the original. This is not a violation of physics — the pieces are non-measurable, so "volume" simply does not apply to them, and non-measurable sets are themselves a direct product of AC.
- Vitali sets and other non-measurable constructions, pathological enough that ordinary notions like length or area break down.

Gödel showed in 1938 that AC is *consistent* with the rest of set theory (ZF); Cohen showed in 1963 that it is *independent* — neither provable nor refutable from ZF. Most mathematicians work in ZFC (ZF plus AC) as the pragmatic default, since the alternative gives up too much otherwise-standard mathematics; constructivists avoid it specifically because they want every existence proof to come with a construction.

## 5. Is the problem that infinitely many choices take infinitely long?

No — and this is worth being precise about, because it's the natural first guess. AC is not a claim about *performing* a sequence of choices over time. A choice function is a completed mathematical object, asserted to exist all at once, the same way the set of natural numbers is treated as a completed infinite object without anyone "counting through it."

The real obstacle is definitional, not temporal: for **finitely** many sets you can write the choice function out as an explicit finite list of pairs, fully specified. For **infinitely** many sets with no distinguishing rule, no formula, algorithm, or definable property picks out the pairs. The other axioms of ZF let you build sets through explicit definitions — pairing, union, comprehension — but none of them is strong enough to conjure a set of pairs when the pairing has no describable pattern. AC is exactly the extra axiom asserting that such a set exists regardless.

## 6. Doesn't picking uniformly at random just settle it?

Not as stated, and for a specific reason: a **uniform** probability distribution does not exist on most infinite sets.

For a countably infinite set like ℕ, assigning equal probability *p* to every element is impossible. If *p* = 0, the probabilities sum to 0, not 1. If *p* > 0, they sum to infinity. Countable additivity of probability measures rules out a uniform distribution on an infinite discrete set outright — this isn't a hard problem to solve, it's not a coherent instruction.

Uncountable sets like ℝ do admit uniform distributions (Lebesgue measure), but only over *measurable* sets — and AC is exactly what lets you construct non-measurable sets in the first place. So the sets AC forces you to reckon with are often precisely the ones with no meaningful notion of "uniform" available at all.

## 7. Setting the probability problem aside — can a random formula still work?

This was the sharper version of the question: if you *could* write down a formula for a random draw from each set, wouldn't that formula itself be a rule, and so sidestep AC?

It depends entirely on what the formula does.

If the "random" draw is actually generated deterministically — say, a pseudorandom generator seeded by some property of the set — then it's a rule in disguise, exactly like taking the minimum. No AC needed, but it isn't really random in the sense that matters; it's a specific, describable, deterministic choice function wearing a costume.

If the draw is *genuinely* random — an honest, independent realization with no formula computing it from the set — then you haven't written down a formula at all. You've asserted that *some* specific outcome exists for each draw, without specifying which, for infinitely many draws simultaneously. That is exactly the kind of unruled, simultaneous selection AC exists to license.

The tempting move is to say: a real random experiment, if run, *does* produce a specific outcome for each set — so isn't the collection of outcomes automatically a well-defined object? This conflates two different claims. That *each individual* draw has *some* specific value is true, but trivial — any nonempty set has *some* element in it, with or without randomness. What's actually in question is whether the *totality* of infinitely many such individually-specific, but unruled, selections can be treated as a single completed object. That packaging step is the choice function, and having each piece be "specific" doesn't supply it.

The distinction that actually matters, then, is not *specific vs. vague* — it's **rule-governed vs. not**. `min(S)` is rule-governed: one formula, uniquely and provably correct for every input, no AC required. A genuine random draw is exactly as unruled as blind, undirected choice — it just feels more determinate because, if it happened, it would yield a definite answer. Formally, that's not enough.

There's a cleaner way to see why: any genuine formula for choice has to *break the symmetry* among a set's elements somehow — smallest, closest to zero, first under some encoding. Uniformity, by definition, refuses to break that symmetry; it treats every candidate as equally valid. That refusal is exactly why it can't serve as the missing rule.

## 8. What about taking the median of each set?

This one splits usefully by what kind of set you're dealing with.

For **finite** sets, median is a genuine formula — sort and take the middle element (or average the two middle ones). Rule-governed, no AC, same status as minimum.

For **infinite subsets of ℕ**, median typically isn't even defined. Take the even numbers: every candidate element has infinitely many elements below it and infinitely many above, so there's no natural "middle." The finite-case logic — sort, count to the midpoint — has nothing to count toward, since there's no last element to work in from.

For **bounded subsets of ℝ**, median can be rescued for nicely shaped sets (the median of \[0,1\] is ½), but it breaks the moment the set isn't a single interval — the median of (0,1) ∪ (5,6) isn't obviously anything in particular. What actually gives a universal, exception-free rule here is not median but **infimum**, using the completeness of ℝ: every nonempty bounded subset of ℝ has a well-defined greatest lower bound, always, with no exceptions and no AC.

The general lesson: a proposed rule only avoids AC if it is a genuine formula producing exactly one well-defined output for *every* set in the collection, with zero exceptions. `min` clears that bar on subsets of ℕ because well-ordering guarantees it unconditionally. Median does not clear that bar in general, because the concept itself stops being defined for some inputs.

## 9. So when exactly can you avoid AC?

Pulling the threads together, the common pattern across every escape route is the same: you avoid AC exactly when some background structure supplies a rule that works, without exception, across the whole collection.

| Setting | What saves you | Why it always works |
|---|---|---|
| Finite sets with some ordering (e.g. subsets of ℕ or ℝ) | `min(S)` | Every nonempty finite ordered set has a least element |
| Finite sets with *no* structure (e.g. abstract pairs — "socks") | Nothing, in general | No feature exists to break the symmetry between elements |
| Subsets of ℕ | `min(S)` | ℕ is well-ordered: every nonempty subset has a least element, no exceptions |
| Bounded subsets of ℝ | `inf(S)` | Completeness of ℝ guarantees the infimum exists, even when the set is open, disconnected, or otherwise irregular |
| Arbitrary infinite collections, no shared structure | AC, or nothing | By construction, no universal formula can exist — this is exactly what Cohen's independence result formalizes |

Finiteness, boundedness, and "living inside ℕ or ℝ" are all suggestive of safety, but none of them is what actually does the work — an underlying order or completeness property is. That's why an open bounded interval needs infimum specifically, rather than median; and why finiteness alone doesn't save you from the sock problem if there's no order to exploit.

## Conclusion

The axiom's independence is really a formal statement of something the whole conversation kept bumping into from different directions: **no universal rule for picking can exist.** If one did — some formula guaranteed to select an element from every conceivable nonempty set, socks included — AC would be a theorem, provable from the other axioms, not a separate assumption. Gödel and Cohen's results say exactly that no such formula is forthcoming, and none is ruled out either; the two positions are equally consistent.

What sharpened for me across this exchange is the actual dividing line, which isn't speed, or specificity, or even randomness — it's whether a proposed method breaks the symmetry among a set's elements in a way that can be written down once and applied uniformly, forever, across an entire infinite family. Minimum does this on well-ordered sets. Infimum does it on bounded reals. Genuine randomness, almost by definition, declines to do it at all — which is precisely why it can't replace the axiom, however specific any single outcome would be if you actually ran the experiment.

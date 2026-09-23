---
layout: blog-post
title: "Memory as a Network: Eight Questions About the Brain"
description: "From lifelong neurons to synaptic graphs, pattern completion, and the possibility that remembering changes a memory."
date: 2026-09-18 22:31:14 +0500
permalink: /blogs/memory-as-a-network/
blog: true
show_hero: false
---

## Preamble

I started with a physical question: what, exactly, remains in the brain when an experience becomes a memory? Is it an electrical charge, a chemical state, or a collection of cells? That led to questions about the age of neurons, the capacity of their connections, and eventually the structure of the graph those connections form.

The graph perspective is useful, but it needs care. A neuron is more complicated than a binary node, a synapse is more complicated than a fixed weight, and remembering involves activity as well as structure. There is also a difference between a measurement from human tissue, an experiment in a mouse, and a mathematical model of what a network could do.

This post follows the eight questions from that conversation. The aim is to build a physical picture of memory while keeping those distinctions visible.

* In this article
{:toc}

## 1. How are memories physically stored, and how old are the neurons?

A long-term memory is not an electrical charge held in a neuron for decades. Neurons use brief electrical signals to communicate. What can persist is a change in how a network responds: which connections exist, how strongly they act, and the cellular machinery that maintains those properties.

The connection points are called **synapses**. Learning can change their strength and structure. For example, recruiting additional receptor proteins to a synapse can increase the receiving cell's response. Experiments have linked this receptor movement to both synaptic strengthening and learning. [Research on receptors and learning](https://www.nature.com/articles/nature23658)

A group of neurons participating in a memory is often called an **engram ensemble**. The information is distributed through the ensemble and its connections; it is not usually sensible to assign one complete personal memory to one neuron. Nor should we assume that synaptic weights are the entire story: excitability and other cellular changes also contribute.

The cell-age question has a surprisingly direct answer. Many neurons really are approximately as old as the person they belong to. Carbon-14 dating of neuronal DNA found that neurons in the human cerebral neocortex were generated around the time of birth, with no detectable substantial replacement during adulthood in that study. [Human neuron-dating study](https://pubmed.ncbi.nlm.nih.gov/16901981/)

This does not apply equally to every brain cell. Supporting cells can turn over, and research supports some continuing neuron production in the adult human hippocampus, with its extent and functional contribution still under investigation. [Adult hippocampal progenitor study](https://pubmed.ncbi.nlm.nih.gov/40608919/)

An old cell also contains many newer molecules. Maintaining a memory while replacing proteins is a biological maintenance problem, not a requirement that its original molecules survive unchanged. Experiments have identified interactions between proteins that can support memory persistence despite molecular turnover. The full explanation for memories lasting many human decades remains incomplete. [Memory-maintenance study](https://pmc.ncbi.nlm.nih.gov/articles/PMC11204205/)

## 2. Does the number of connections put an upper bound on memory capacity?

Finite biological hardware constrains how much information can be retained reliably. But a connection is not a slot holding one memory. Multiple memories can use overlapping neuronal populations, and a single memory can depend on many connections. [Overlapping memory ensembles](https://www.nature.com/articles/nature17955)

Consider a deliberately simplified model with **N** neurons, an average of **k** incoming synapses per neuron, and **q** reliably distinguishable states at each synapse. If the wiring is fixed and these synaptic states are the only storage variables, the model has at most:

> **N × k × log₂(q) bits**

The bound assumes that the states can vary independently; correlations and requirements for reliable retrieval can reduce usable capacity. Measuring the number of distinguishable synaptic strengths is one approach researchers have used to estimate information capacity at the synapse level. It does not establish a whole-brain memory capacity. [Synaptic information study](https://elifesciences.org/articles/10778)

Combinatorics does not remove the limit. One hundred binary switches permit **2¹⁰⁰ configurations**, but store **100 bits at a time**. The number of possible states is different from the amount of independent information simultaneously retained.

Converting bits into a count of memories introduces another problem: memories have no standard size. Knowing that I visited a city is different from recalling a detailed afternoon there. Related experiences can share information, while learning new material can interfere with old associations. Models of bounded synapses explicitly confront this tradeoff between learning and retention. [Synaptic capacity models](https://pubmed.ncbi.nlm.nih.gov/17351638/)

There is no established maximum number of human memories that can be calculated from average neuron degree alone.

## 3. Is there one memory region, or does every neuron store memories?

Memory depends on several interacting systems. A particular memory recruits selected populations, often in multiple regions; it does not involve every neuron equally. Experiments in mice have identified ensembles supporting one learned memory across many brain areas. [Distributed memory traces](https://www.nature.com/articles/s41467-022-29384-4)

| Region | Some of its contributions |
| --- | --- |
| Hippocampus | Forming and retrieving associations among the elements of events and places |
| Cerebral cortex | Long-term knowledge and distributed representations of experience, including sensory content |
| Amygdala | Learned emotional associations and modulation of memory |
| Basal ganglia | Habits and practiced responses |
| Cerebellum | Learned movement adjustments, timing, and certain conditioned responses |

These are interacting contributions rather than exclusive storage assignments. Research on [hippocampal, cortical, and amygdala circuits](https://pmc.ncbi.nlm.nih.gov/articles/PMC5493329/), [habit learning](https://pubmed.ncbi.nlm.nih.gov/8673408/), and [cerebellar motor memory](https://www.sciencedirect.com/science/article/pii/S0896627302007195) demonstrates these different roles.

Remembering a birthday can involve its setting, voices, faces, and emotional significance. Those elements need not reside in one location. Human imaging studies show that recalling sights and sounds reactivates some of the cortical regions engaged when they were originally perceived. [Sensory reinstatement study](https://pubmed.ncbi.nlm.nih.gov/11005879/)

There is therefore no clean, permanent division into neurons that store memories and neurons that process current experience. The same circuitry can contribute to both.

## 4. Does the brain keep multiple copies of a memory?

Sometimes there are parallel traces, but “copy” can hide important differences.

For a familiar face, multiple brain regions can carry information about identity. They may emphasize appearance, familiarity, or knowledge about the person. This gives overlapping representations without demonstrating that each region contains an interchangeable backup. [Familiar-face representations](https://pubmed.ncbi.nlm.nih.gov/28947835/)

For an emotional experience, a remembered fact and a learned bodily response can be partly separate. In a human study, a patient with hippocampal damage acquired a conditioned bodily response without acquiring the associated declarative facts. A patient with amygdala damage showed the reverse. These are different forms of memory from the same experience, rather than identical recordings of a feeling. [Human memory dissociation study](https://pubmed.ncbi.nlm.nih.gov/7652558/)

There is also evidence closer to parallel storage. A 2024 mouse study found that learning established multiple traces in different hippocampal neuron populations, with different trajectories of reactivation and contributions to persistence and updating. [Parallel-trace study](https://edoc.unibas.ch/entities/publication/3ab64a1a-2f10-44fb-9771-f059e6f7262b)

That result does not establish a fixed number of complete backups for every human memory. Some apparent redundancy may preserve related information in different forms or support different functions over time.

## 5. How large is the hippocampus as a graph?

First we need to specify the boundary. There is a hippocampus on each side of the brain. A classic anatomical study estimated roughly **40 million neurons per side** across the broader hippocampal formation, including the dentate gyrus and subiculum. The estimate came from sampled tissue and varied substantially between individuals. [Human neuron-counting study](https://pubmed.ncbi.nlm.nih.gov/2358525/)

| Graph boundary | Approximate node scale |
| --- | ---: |
| One hippocampal formation | 40 million |
| Both hippocampal formations | 80 million |

The edge count is less straightforward. As an **illustrative assumption**, suppose each of 40 million neurons receives 10,000 synapses from other neurons included in the graph:

> **40 million × 10,000 = 400 billion directed synaptic edges**

This is arithmetic under an assumption, not a measured human hippocampal synapse total. Detailed human synapse studies examine small samples, and their results vary across layers and regions. [Human CA1 synapse study](https://elifesciences.org/articles/57013)

A graph that counts individual synapses is a **directed multigraph**: the same neuron pair can have several edges. A graph that merges all contacts between two neurons has fewer edges. Inputs from outside the hippocampus also require either external nodes or an explicit boundary convention.

For a computing comparison, an edge list containing 400 billion entries, each with two 4-byte neuron identifiers and one 4-byte weight, would occupy **4.8 terabytes** before overhead. This is the storage cost of one simplified representation, not the brain's memory capacity or the cost of a faithful simulation.

## 6. Are connections reciprocal, are there triangles, and what is the degree distribution?

Two neurons can connect in both directions through separate chemical synapses. **A → B** does not require **B → A**, and the strengths of the two connections can differ.

In a classic rat visual-cortex study, reciprocal pairs occurred about four times as often as an independent random-connection model predicted. Several clustered three-neuron patterns were also overrepresented. Those results concern a particular cortical population, not every brain circuit. [Cortical connectivity study](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.0030068)

Direction matters when discussing triangles:

| Pattern | Edges | Directed cycle? |
| --- | --- | --- |
| Reciprocal pair | A → B; B → A | Yes: length 2 |
| Cyclic triangle | A → B; B → C; C → A | Yes: length 3 |
| Feedforward triangle | A → B; B → C; A → C | No |

The relatively complete fruit-fly connectome contains an excess of several recurrent and triangular patterns compared with randomized graphs. This provides strong evidence of structured wiring, but not a triangle count for the human hippocampus. [Fly connectome analysis](https://www.nature.com/articles/s41586-024-07968-y)

There is no established whole-human-hippocampus average cycle length. Even with a complete graph, the statistic needs a definition: the average over all simple cycles differs from the average shortest return loop through each neuron. Neither directly gives an oscillation period, which also depends on delays and cellular dynamics.

Likewise, there is no single established choice among a uniform, normal, or power-law degree distribution for this entire human network. **In-degree**, **out-degree**, and **synapse count** are different quantities. Pooling cell types and subregions mixes different wiring populations. Mouse CA3 experiments further show that connectivity and the abundance of small motifs change during development. [Developmental CA3 study](https://www.nature.com/articles/s41467-026-71914-x)

Two distinctions prevent misleading shortcuts. An activity-derived network is not necessarily an anatomical wiring diagram: correlated firing does not prove a direct synapse. And a distribution of **connection strengths** is not a distribution of **degrees**. The lognormal strengths measured in the cortical study describe many weak connections and fewer strong ones, not a law for neighbor counts.

## 7. How does a cue retrieve a memory?

The natural hypothesis is largely right: a cue can activate part of a learned representation and help reinstate more of it. This is **pattern completion**.

Imagine hearing a song associated with a childhood birthday. The song activates auditory and association networks. The learned associations engage representations of the event, with the hippocampus helping link its elements. Reinstatement across cortical networks can then bring the room, the people, and other details to mind.

Human experiments have found that a cue for one event element can reinstate representations of other elements, including details participants were not specifically asked to retrieve. [Human pattern-completion study](https://www.nature.com/articles/ncomms8462)

In graph terms, retrieval is a change in **network activity**, guided by connections shaped during learning. An attractor-network model explains how repeated interactions can pull an incomplete pattern toward a learned one. Recurrent CA3 circuitry is a candidate mechanism; mouse experiments show that disrupting particular CA3 learning mechanisms can selectively impair recall when only part of the original cue set is available. [CA3 partial-cue experiment](https://pubmed.ncbi.nlm.nih.gov/12040087/)

A cue can also be internal. Human recordings found that some neurons active during particular video clips reactivated before people verbally reported freely recalling those clips. [Human free-recall study](https://pubmed.ncbi.nlm.nih.gov/18772395/)

More directly, activating tagged hippocampal neurons from a fear-learning experience caused mice to express the learned freezing response in a different setting. This supports a causal role for ensemble reactivation, while leaving the animal's subjective experience unknown. [Engram-reactivation experiment](https://www.nature.com/articles/nature11028)

Retrieval need not reproduce every original neuron or spike. It reconstructs enough relevant information to support remembering, sometimes incompletely or inaccurately.

## 8. Does remembering in a new context overwrite the original memory?

This is the difficulty that follows from the retrieval picture. When I recall an old event, the present environment also activates neurons. Why should the two experiences not merge?

The first distinction is between **using a connection and changing it**. In the graph model, the current activity pattern and the rules for modifying edge weights are separate, interacting parts of the system. Coactivity alone does not require every connection between active neurons to strengthen. Synaptic plasticity depends on local activity, timing, and chemical conditions. Experiments show that activity can leave a temporary eligibility trace, with additional chemical signals determining whether lasting changes follow. [Plasticity-gating study](https://www.nature.com/articles/s41467-022-30827-1)

The brain also supports **pattern separation**: representing similar experiences with distinguishable neural patterns. Human evidence particularly implicates the dentate gyrus. [Pattern-separation study](https://pmc.ncbi.nlm.nih.gov/articles/PMC6705559/)

Recall can therefore reinforce access to an old memory, establish a new association, or update parts of what is later remembered. I can remember discussing a birthday in a café without relocating the birthday itself to that café.

Updating is related to **reconsolidation**, in which a reactivated memory can become temporarily susceptible to modification and then stabilize again. Retrieval does not invariably initiate this process. Experiments on human fear learning show that unexpected information during retrieval can determine susceptibility to change. [Reconsolidation boundary study](https://pubmed.ncbi.nlm.nih.gov/22406658/)

Contamination nevertheless occurs. In an object-list experiment, people reminded of an earlier list before learning a second list later mixed some new items into their recall of the first. Recall of original items was not significantly reduced, making incorporation a better description than wholesale replacement. [Episodic updating experiment](https://pmc.ncbi.nlm.nih.gov/articles/PMC1838545/)

A changed report still does not prove that the original information was erased. The underlying trace might have changed, newer associations might compete with it, or the person might confuse which experience supplied a detail.

## Conclusion

The question that began with the age of a neuron ends with a distinction between a network's structure, its current activity, and its capacity to change. Long-lived cells can support changing connections. Those connections can help reconstruct an experience from a partial cue. The act of reconstruction can sometimes become an opportunity for further learning.

For me, the graph perspective makes the remaining questions more precise. What counts as an edge? Which neuronal populations are included? Are we measuring anatomical connections, activity correlations, or synaptic strengths? What makes a retrieved pattern stable enough to recognize but flexible enough to update?

A graph is a useful starting point for these questions. Explaining memory also requires the rules that move activity through that graph and the biological conditions under which its connections change.

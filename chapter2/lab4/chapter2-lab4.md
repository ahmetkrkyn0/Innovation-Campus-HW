# Unit 04 - Lab 4: General Prompt vs. Step-by-Step Instructions

## Lab Scenario

The task is to create a midterm-week study plan for a Software Engineering student. The AI must calculate total study hours and distribute break times according to each course's difficulty level.

This is a multi-step logical and mathematical task because the AI must:

1. Identify the required study tasks and their difficulty levels.
2. Allocate realistic study blocks for each subject.
3. Calculate total study hours correctly.
4. Distribute break times based on difficulty.
5. Verify whether the final plan is balanced and realistic.

---

## A/B Test Simulation

## Prompt A - General Prompt

### Prompt Style

All instructions are given in one paragraph.

### Simulated Result

Prompt A produced a usable but less reliable study plan. It created a schedule quickly, but it did not clearly show how the total study time was calculated. It also treated break times as generic rest periods instead of distributing them according to course difficulty.

### Observed Weaknesses

- The AI jumped directly to the final answer.
- The calculation process was not transparent.
- Break distribution was not clearly connected to difficulty level.
- It was harder to verify whether the plan followed all constraints.

---

## Prompt B - Step-by-Step Prompt

### Prompt Style

The task is divided into logical stages before producing the final plan.

### Simulated Result

Prompt B produced a more accurate and verifiable result. It first identified the courses, then assigned difficulty levels, then calculated study hours, and finally distributed breaks based on difficulty.

### Observed Strengths

- The AI followed a visible logical sequence.
- Total study hours were easier to verify.
- Break times were more intentional and proportional.
- The final answer felt more professional and reliable.

---

## Activity Answers

## 1. Lab 4-1

"To solve this task perfectly, the AI must first identify the subjects, deadlines, and difficulty levels, then calculate the total study hours and break distribution, and finally verify whether the final schedule is realistic and balanced."

## 2. Lab 4-2

"Prompt A produced a result that felt incomplete because the AI missed the specific constraint of distributing break times according to each course's difficulty level."

## 3. Lab 4-3

"By using Step-by-Step instructions, the AI was able to separate planning, calculation, break allocation, and verification into clear stages, which was missing in the general approach of Prompt A."

## 4. Lab 4-4

"The biggest difference was logical traceability. While Prompt A felt like a quick draft, Prompt B provided a structured and verifiable solution because it forced the AI to calculate study hours and break durations before presenting the final schedule."

## 5. Lab 4-5

"I will use Prompt A when I need a quick overview or brainstorming output, and Prompt B when the task requires multi-step reasoning, mathematical accuracy, or constraint validation to ensure my AI outcomes are always reliable and professionally structured."

---

## Short Reflection

This A/B comparison shows that Prompt A can be useful for simple and low-risk tasks, but Prompt B is more appropriate for Software Engineering workflows that require calculation, prioritization, debugging, or validation. For complex academic planning tasks, step-by-step prompting reduces hidden errors and makes the final result easier to audit.

1. What are some differences between interfaces and types in TypeScript?

১। ইন্টারফেস এবং টাইপ এর মধ্যে কিছু পার্থক্য:

TypeScript-এ ইন্টারফেস এবং টাইপ উভয়ই ডেটা স্ট্রাকচার বর্ণনা করতে ব্যবহৃত হয়। তবে তাদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। ইন্টারফেস সাধারণত অবজেক্ট এবং ক্লাসের জন্য ব্যবহৃত হয়, যেখানে type অবজেক্ট ছাড়াও প্রিমিটিভ বা অন্যান্য টাইপের জন্য ব্যবহার করা যেতে পারে।

ইন্টারফেস (Interface):
ইন্টারফেস extends কীওয়ার্ড ব্যবহার করে অন্য একটি ইন্টারফেস কে এক্সটেন্ড বা প্রসারিত করতে পারে। boolean টাইপের ডাটার জন্য interface ব্যবহার করা যায় না, কারণ interface-এ সমান চিহ্ন (=) ব্যবহার করা যায় না।

উদাহরণ:

interface Animal {
name: string;
}

interface Dog extends Animal {
sound: string;
}

const myDog: Dog = {
name: "Kalo Dog,
sound: "ghew ghew"
};

ইন্টারফেসের বৈশিষ্ট্য:

extends কীওয়ার্ড ব্যবহার করে অন্য ইন্টারফেসকে এক্সটেন্ড করা যায়

শুধুমাত্র অবজেক্ট টাইপের জন্যই ব্যবহার করা যায়

প্রিমিটিভ টাইপ (যেমন: boolean) এর জন্য সরাসরি ব্যবহার করা যায় না

টাইপ (Type):
type কীওয়ার্ড ব্যবহার করে একটি টাইপ তৈরি করা হয়। এটি অবজেক্ট, প্রিমটিভ, ইউনিয়ন, টাপল ইত্যাদি যেকোনো ধরনের ডেটা স্ট্রাকচার তৈরি করতে পারে।

উদাহরণ:

type ID = string | number;
type Point = {
x: number;
y: number;
};

টাইপের বৈশিষ্ট্য:

ইউনিয়ন (|), ইন্টারসেকশন (&) টাইপ তৈরি করতে পারে

প্রিমিটিভ, টাপল, অবজেক্ট - সব ধরনের টাইপ ডিফাইন করতে পারে

Type-কে extend বা combine করতে & (ইন্টারসেকশন অপারেটর) ব্যবহার করতে হয়।

কখন কোনটি ব্যবহার করা উচিত?
যখন একটি অবজেক্টের নির্দিষ্ট কাঠামো বা রূপ define করতে interface ব্যবহার করাই ভালো কারণ interface মূলত object এর ডিজাইন বা blueprint বানানোর জন্যই তৈরি।এর সবচেয়ে বড় সুবিধা হলো- এটি পরবর্তীতে সহজেই বাড়ানো যায়, যা বড় অ্যাপ্লিকেশন বা টিম-ভিত্তিক প্রজেক্টে কাজে লাগে।

আর যখন টাইপকে আরও flexible, জটিল বা বিভিন্ন রূপ দিতে type বেশি উপযোগী - কারণ type শুধু object structure না— বরং primitive টাইপ, union, intersection, function signature, tuple সব কিছুর জন্য ব্যবহার করা যায়।যেখানে interface সব কিছুর জন্য ব্যবহার যায় না।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

TypeScript-এ keyof কিওয়ার্ডের ব্যবহার

TypeScript আমাদের টাইপ সেফটি এবং কোডের স্থিতিশীলতা বাড়াতে অনেক শক্তিশালী টুল দেয়। এর মধ্যে একটি গুরুত্বপূর্ণ কিওয়ার্ড হলো keyof।

keyof কী?

keyof একটি type operator যা একটি অবজেক্ট টাইপকে ইনপুট হিসেবে নিয়ে সেই অবজেক্টের সকল কী (keys) এর string বা numeric literal union type তৈরি করে। সহজভাবে বলতে গেলে, এটি আমাদের বলে দেয়, “এই অবজেক্টে কোন কোন প্রপার্টি আছে।”

উদাহরণ:

type Point = { x: number; y: number };

type P = keyof Point;

এখানে Point অবজেক্টে দুইটি প্রপার্টি আছে: x এবং y।

keyof Point ব্যবহার করলে TypeScript এই দুইটি প্রপার্টির নামকে একটি union type হিসেবে বের করে। তাই P এর টাইপ হবে "x" | "y"।

এটি খুবই কাজে লাগে, যখন আমরা কোন ফাংশন বা জেনেরিক টাইপে শুধুমাত্র অবজেক্টের বৈধ কী অনুমোদন করতে চাই।


function getValue(obj: Point, key: keyof Point) {
    return obj[key];
}

const point: Point = { x: 10, y: 20 };

getValue(point, "x"); 
getValue(point, "y"); 


উদাহরণ: ইন্ডেক্স সিগনেচার সহ অবজেক্ট

যদি অবজেক্টের কী string বা number index signature দিয়ে সংজ্ঞায়িত হয়, তাহলে keyof সেই ধরনের union type তৈরি করে।

type NumberIndexedObject = { [numKey: number]: unknown };

type NumberKeys = keyof NumberIndexedObject;

// NumberKeys এর টাইপ হবে number

এখানে NumberIndexedObject হলো একটি সংখ্যার সূচক ভিত্তিক অবজেক্ট। তাই keyof এখানে number রিটার্ন করে।


সংক্ষেপে:

keyof একটি টাইপ অপারেটর যা অবজেক্টের কী এর union টাইপ দেয়।

এটি মূলত জেনেরিক ফাংশন, type-safe accessor, এবং টাইপ রিসট্রিকশনে কাজে লাগে।

ইন্ডেক্স সিগনেচার থাকলে এটি string, number বা উভয় রিটার্ন করতে পারে।
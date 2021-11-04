type Engineer = {
    name: string;
    role: string;
}

type Blogger = {
    name: string;
    follower: number;
}

// type EnginnerBlogger = Engineer & Blogger;
interface EnginnerBlogger extends Engineer, Blogger { }

const quill: EnginnerBlogger = {
    name: "Quill",
    role: "front-end",
    follower: 1000
}
type NumberBoolean = number | boolean;
type StringNumber = string | number;
type Mix = NumberBoolean & StringNumber;
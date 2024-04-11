// src/data/course-details.js
const workshopDetails = {
    basic_excel: {
        instructor: {
            name: "Zeeshan Zubairi",
            avatar: "/assets/img/course/male.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Basic Microsoft Excel",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Excel",
            tag_two: "Development",
            rating: 4.7,
            ratingCount: 125,
            time: "9am to 3pm",
            date: "16 Jan, 2024",
            day: "Tuesday",
            skill: "Beginner",
        },
        modulesDetails: [
            {
                heading: "Module 01: Introduction to Excel",
                description: "What is Cell, What is Worksheet, What is Workbook, What is Ribbon, What is QAT (Quick Access Toolbar),Rows & Columns Label, Formula Bar, Name Box",
            },
            {
                heading: "Module 02: Formatting on Excel",
                description: "Font / Background Color, Formatting for Effects (Bold, Italic, Underline), Formatting (Number, Date, Currency, etc), Merge, Wrap Text, Using Format Painter, Border Formatting, Freeze Column and/or Row",
            },
            {
                heading: "Module 03: Adjusting & Working in Worksheet",
                description: "Inserting / Deleting Cells, Inserting / Deleting Rows & Columns, Hiding / Un-Hiding Rows & Columns, Adjusting Row Height and Column Width, Copy/Moving/Renaming Worksheet, Inserting / Deleting Worksheet, Hiding / Un-Hiding Worksheet, Copy, Paste, Paste Special, Overwriting / Editing Cell Contents, Moving and Copying Cells with Drag and Drop, Using Undo, Redo, and Repeat, Find & Replace, Data Filtering, Data Sorting",
            },
            {
                heading: "Module 04: Formulas on Excel",
                description: "Insert Formula, Common Formulas, Copying Formula, Relative & Absolute, Referencing",
            },
            {
                heading: "Module 05: Charts on Excel",
                description: "Making Charts, Chart Types, Moving and Resizing a Chart, Adding Title, Legends, Labels, etc",
            },
            {
                heading: "Module 06: Printing on Excel",
                description: "Printing Options, Page Preview, Page Setup & Orientation, Headers & Footers",
            },
            {
                heading: "Module 07: Some General Functions ",
                description: "Print Titles, Text Alignment, Transpose, Hyperlink, Text To Columns, Concatenate, GOTO Feature, ETC",
            },
        ]
    },
    advance_excel: {
        instructor: {
            name: "Zeeshan Zubairi",
            avatar: "/assets/img/course/male.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Advance Microsoft Excel",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Excel",
            tag_two: "Development",
            rating: 4.7,
            ratingCount: 125,
            time: "9am to 3pm",
            date: "17 Jan, 2024",
            day: "Wednesday",
            skill: "Advanced",
        },
        modulesDetails: [
            {
                heading: "Module 01: Summing Techniques",
                description: "Doing SUM through impressive shortcut, 3D Summing,Data Consolidation, QAT (Quick Analysis Tool)",
            },
            {
                heading: "Module 02: Power Functions / Formulas",
                description: "SumIF, SumIFS, Average, AverageIFS, Count, CountA, CountIF, CountIFS, Creating Dynamic Reports using Power Functions, ARRAY Formula",
            },
            {
                heading: "Module 03: Formula Referencing",
                description: "Absolute and Relative Referencing, Problems with Relative Formulas, Creating Absolute References",
            },
            {
                heading: "Module 04: Text Options",
                description: "Text to Columns, Using Left, Right & Upper Formula, Using TEXT Formula",
            },
            
            {
                heading: "Module 05: Conditional Formatting",
                description: "Formatting Cells Containing Values, Clearing Conditional Formatting, More Cell Formatting Options, Top & Bottom Ten Items, Working with Data Bars, Working with Color Scales, Working with Icon Sets",
            },
            {
                heading: "Module 06: Dynamic Table",
                description: "Converting data into Table, Automated calculation in Table, Converting Table to normal range, Multiple Filters in Table",
            },
            {
                heading: "Module 07: Data Validation",
                description: "Drop-down List, Restricted Values in a Cell, Error messages in case of wrong entry, Dependent List",
            },
            {
                heading: "Module 08: Database Formulas",
                description: "DSum, DAverage, DCount, DCountA, DMax, DMin, Creating Dynamic Reports using Database Formulas",
            },
            {
                heading: "Module 09: Advance Filter & Filter",
                description: "Understanding Filtering, Understanding ADVANCE Filter, Applying and Using a Filter, Clearing a Filter, Multiple Value Filters, Using Wildcards",
            },
            {
                heading: "Module 10: Subtotal",
                description: "Subtotal Formula, Subtotal Function, Group / UnGroup (Rows & Columns)",
            },
            {
                heading: "Module 11: Sorting",
                description: "Performing an Alphabetical Sort, Performing a Numerical Sort, Performing Custom Sort, Sorting On More Than One Column, Sorting By Vertically & Horizontally",
            },
            {
                heading: "Module 12: Lookup References",
                description: "Using Vlookup, Using Hlookup, Using IFerror with Vlookup, Using Multiple Criteria in Vlookup, Using Index, Match",
            },
            {
                heading: "Module 13: Macros",
                description: "Recording & Running Macros, Adding button to run the macro, Assigning shortcut to macro, Deleting Macros, Using Shapes option in Macros, SPELLNUMBER for Numeric into Text - VBA, SUM if BOLD values - VBA",
            },
            {
                heading: "Module 14: PivotTable",
                description: "Understanding PivotTable, Dropping Fields into PivotTable, Filtering a PivotTable Report, Clearing a Report Filter, Calculations in PivotTable, Formatting a PivotTable Report, Using SLICERS for Dynamic Reporting, Adding TIMELINE",
            },
            {
                heading: "Module 15: Charts & Graphs",
                description: "Creating Chart, Best Chart according to your Data, Adding a Linked Chart Title, Adding Axes Titles, Positioning the Legend, Showing Data Labels, Modifying the Axes, Showing Gridlines, Creating & Customizing SPARKLIN",
            },
        ]
    },
    // amazon_virtual_assistant: {
    //     instructor: {
    //         name: "Asra Shahab",
    //         avatar: "/assets/img/course/female.png",
    //         title: "Award Winning Chemical & User Interface Design Training",
    //     },
    //     aboutCourse: {
    //         title: "Amazon Virtual Assistant",
    //         main_image: "/assets/img/course/c-details-bg-01.jpg",
    //         tag_one: "Excel",
    //         tag_two: "Development",
    //         rating: 4.7,
    //         ratingCount: 125,
    //         time: "9am to 3pm",
    //         date: "16 Jan, 2024",
    //         day: "Tuesday",
    //         skill: "Beginner",
    //     },
    //     modulesDetails: [
    //         {
    //             heading: "Module 01: Introduction to Excel",
    //             description: "What is Cell, What is Worksheet, What is Workbook, What is Ribbon, What is QAT (Quick Access Toolbar),Rows & Columns Label, Formula Bar, Name Box",
    //         },
    //         {
    //             heading: "Module 02: Formatting on Excel",
    //             description: "Font / Background Color, Formatting for Effects (Bold, Italic, Underline), Formatting (Number, Date, Currency, etc), Merge, Wrap Text, Using Format Painter, Border Formatting, Freeze Column and/or Row",
    //         },
    //         {
    //             heading: "Module 03: Adjusting & Working in Worksheet",
    //             description: "Inserting / Deleting Cells, Inserting / Deleting Rows & Columns, Hiding / Un-Hiding Rows & Columns, Adjusting Row Height and Column Width, Copy/Moving/Renaming Worksheet, Inserting / Deleting Worksheet, Hiding / Un-Hiding Worksheet, Copy, Paste, Paste Special, Overwriting / Editing Cell Contents, Moving and Copying Cells with Drag and Drop, Using Undo, Redo, and Repeat, Find & Replace, Data Filtering, Data Sorting",
    //         },
    //         {
    //             heading: "Module 04: Formulas on Excel",
    //             description: "Insert Formula, Common Formulas, Copying Formula, Relative & Absolute, Referencing",
    //         },
    //         {
    //             heading: "Module 05: Charts on Excel",
    //             description: "Making Charts, Chart Types, Moving and Resizing a Chart, Adding Title, Legends, Labels, etc",
    //         },
    //         {
    //             heading: "Module 06: Printing on Excel",
    //             description: "Printing Options, Page Preview, Page Setup & Orientation, Headers & Footers",
    //         },
    //         {
    //             heading: "Module 07: Some General Functions ",
    //             description: "Print Titles, Text Alignment, Transpose, Hyperlink, Text To Columns, Concatenate, GOTO Feature, ETC",
    //         },
    //     ]
    // },
    shopify: {
        instructor: {
            name: "Abdur Rehman",
            avatar: "/assets/img/course/female.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Shopify",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Shopify",
            tag_two: "E-Commerce",
            rating: 4.7,
            ratingCount: 125,
            time: "12pm to 5pm",
            date: "9 & 11 Jan, 2024",
            day: "Tue & Thur",
            skill: "Beginner",
        },
        modulesDetails: [
            {
                heading: "Module 01: Introduction",
                description: "Introduction to shopify platform",
            },
            {
                heading: "Module 02: Build Your Store",
                description: "Start Free Account, Navigate Your Store, Pick Your Theme, Design Your Store, Create Your Logo, Add a Contact Page, Add Legal Pages, Make Pages Visible, Remove “Powered by Shopify",
            },
            {
                heading: "Module 03: Choose your Market & Product",
                description: "Store Guideline, Product Guideline, Download DSers, Choose Your Products",
            },
            {
                heading: "Module 04: Add Products",
                description: "Import Products, Add Collection, Product Page, Homepage Final Touch",
            },
            {
                heading: "Module 05: Increase Sales:",
                description: "Add Product Review, Reciprocity, Curiosity, Scarcity,Social Proof",
            },
            {
                heading: "Module 06: Setup Your Business:",
                description: "Taxes, Shopify Subscription, Domain Name, Title & Meta Description, Shipping Models, Add Shipping Rate, Add Shipping & Delivery Page, Payment Providers, Optimize Email Notification, Store Currency, Test Order, Going Live",
            },
            {
                heading: "Module 07: Order Fulfillment",
                description: "AliExpress Setup, Order Fulfillments, DSers Settings, Shopify Settings, Returns & Refunds",
            },
            {
                heading: "Drive Traffic",
                description: "AliExpress Setup, DSers Setting, Shopify Setting, Returns & Refunds"
            }
        ]
    },
    personal_development: {
        instructor: {
            name: " Shahrukh Nadeem",
            avatar: "/assets/img/course/female.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Personal Development",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Productivity",
            tag_two: "Development",
            rating: 4.7,
            ratingCount: 125,
            time: "12pm to 5pm",
            date: "9 & 11 Jan, 2024",
            day: "Tue & Thur",
            skill: "Beginner",
        },
        modulesDetails: [
            {
                heading: "Module 01:",
                description: "Understanding the concept of being Productive, Productivity: Defined, Key Techniques for Increasing Productivity, Understanding People, Controlling Internal and External Situations, Understanding Self and building a self-image, Identifying and Prioritizing Activities, Establishing a culture for Productivity, Celebrating Productivity",
            },
            {
                heading: "Module 02:",
                description: "Productivity through Effective Time Management, Setting SMART Goals and Objectives, Establishing Personal Goals, Establishing Organizational Goals, Penning down your life and career goals, Planning and Strategizing, Tracking and Analysing, Conceptualizing dreams into creative ideas",
            },
            {
                heading: "Module 03:",
                description: "Productivity by Prioritizing activities, Setting Priorities- work and personal life, Handling Interruptions and Distractions,  Managing Emergencies and sudden tasks, To-Do-List and calendaring daily tasks, Handling surprise interventions, Innovation and Improvisation,  Building efficiency at work and processes, Physical and Digital Communications and Social Media, The Power of saying No",
            },
            {
                heading: "Module 04:",
                description: "Productivity through improved Communication Skills, Communication and today’s world, Communication: Boon or Landslide, Setting priorities in Communication, Emotions and Empathy in successful Communication, Rephrasing and understanding with appropriate questions, Listening to unspoken communication, Excellence in Reading and Understanding, Writing for Maximum Impression, Use of Technology and digital aids, Communicating and influencing Groups",
            },
            {
                heading: "Module 05:",
                description: "Fundamentals and Psychology of Personality, Personality Development, Stages of Personality Development, Factors that influence a person’s personality, Basic Personality Traits, Personality Types and recognizing them, Personality Disorders, Recognizing self and areas of development, Working on Personality Changes and Challenges",
            },
            {
                heading: "Module 06:",
                description: "Productivity through Leadership and Teamwork, Allocating and Communicating Vision, Designing a self Learning Ecosystem, Coaching self-motivated Teams, Power of Empowerment and Delegation, Levels of Delegation, Positive and realistic expectations, Developing and Investing in people, Organizing productive and efficient meetings, Celebrating Success, Gamification of Challenge",
            },
            {
                heading: "Module 07:",
                description: "Auditing and Analysing aspects of daily life, Strengthening strengths and eliminating weakness, People Management, Developing Relationships, Helping attitude for development, Avoiding energy wasters, Learning to disconnect and let go, Cherishing life moments",
            },
            {
                heading: "Module 08:",
                description: "Character Building, Personal Grooming, Personal Hygiene, Power of Attitude and Emotions, Art of Assertive Communication, Self-Analysis and Improvement, Reflections: Journaling success and learnings, Importance of Emotional Quotient, Personal and Business Etiquettes"
            }
        ]
    },
    communication_skills: {
        instructor: {
            name: " Shahrukh Nadeem",
            avatar: "/assets/img/course/female.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Communication Skills",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Communication",
            tag_two: "Training",
            rating: 4.7,
            ratingCount: 125,
            time: "12pm to 5pm",
            date: "9 & 11 Jan, 2024",
            day: "Tue & Thur",
            skill: "Beginner",
        },
        modulesDetails: [
            {
                heading: "Module 01: Introduction to Effective Communication",
                description: "The Characteristics of an Effective Communicator, Importance of Communication in the 21st Century, Communication Self-Assessment, Basics of Communication, Summary",
            },
            {
                heading: "Module 02: Core Components of Effective Communication",
                description: "An Introduction | Components of Communication – Verbal Communication, Importance of the Tone, Non – Verbal Communication, Application and Practice, Assessment and Personal Constructive Feedback",
            },
            {
                heading: "Module 03: Effective Verbal Communication:",
                description: "What You Say Matters, Effect and Impact of Power Words, Positive Communication, Words for Success, Words to Avoid, Practice Activities & Constructive Feedback",
            },
            {
                heading: "Module 04: Vocal Impact",
                description: "Introduction | The ‘How’ of Effective Communication, Pronunciation and Syllable Stress, Common Grammatical Errors, Construct Effective Sentences, Word Stress for Vocal Impact, Role-plays and Constructive Feedback",
            },
            {
                heading: "Module 05: Non-Verbal Communication",
                description: "Introduction | Body Language, Elements of Non-Verbal Communication, Do’s and Don’t, Interpretation of Various Body Signals, Recommended Postures for Workplace Communication, Summary and Practice",
            },
            {
                heading: "Module 06: Role of Listening in Communication",
                description: "Introduction | Listening, The impact of listening on Communication, The 3 levels of Listening, Listening with Empathy, How to Display Effective Listening, Practice Activities & Constructive Feedback",
            },
            {
                heading: "Module 07: Probing and Acknowledgment",
                description: "Introduction | Questioning Skills, Use of Effective Probing In Communication, What is Acknowledgement?, Benefits of a Sincere Acknowledgements, The Conversational Cycle, Rapport Building, Summary & Assignment",
            },
            {
                heading: "Module 08: Assertive Communication",
                description: "Types of Communication, introduction to Assertiveness, The Art of Assertive Communication, Applying Communication Components Effectively, Cross-cultural Communication, Summary & Personal Constructive Feedback, Personal Development Plan"
            }
        ]
    },
    talent_acquisition: {
        instructor: {
            name: " Shahrukh Nadeem",
            avatar: "/assets/img/course/female.png",
            title: "Award Winning Chemical & User Interface Design Training",
        },
        aboutCourse: {
            title: "Talent Acquisition",
            main_image: "/assets/img/course/c-details-bg-01.jpg",
            tag_one: "Communication",
            tag_two: "Training",
            rating: 4.7,
            ratingCount: 125,
            time: "12pm to 5pm",
            date: "9 & 11 Jan, 2024",
            day: "Tue & Thur",
            skill: "Beginner",
        },
        modulesDetails: [
            {
                heading: "DAY: 01",
                description: "Talent Acquisition v/s Recruitment, Workforce Forecasting, Role Design, Talent Acquisition Process, Recuiting & Tracking Applicant, Talent Mapping"
            },
            {
                heading: "DAY: 02",
                description: "Screening & Interview, Evaluating Perspective Employees, Negotiation, Onboarding, Workplace Relation, Career Guidance"
            }
        ]
    }
};

export default workshopDetails;

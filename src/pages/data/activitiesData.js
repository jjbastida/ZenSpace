import { GoalSetting } from "../../components/activitiesCustom/GoalSetting";

export const activitiesMaster = {
    livingInMySpace: {
        name: 'Living In My Space',
        description: 'A guided meditation and goal actualization session aimed to focus your thoughts and bring you to the current moment. Being present through the process will allow you to work on your space at your own pace.',
        link: 'intro',
        imagePath: '/images/Frame 3.png',
        logInRequired: false,
        content: [{
            title: 'Purpose',
            body: 'As we go through our day to day lives we often forget how much time we spend in our spaces. Whether you are resting, relaxing, playing, working, or using your space to accomplish a goal, it is important that your space feels it matches its intended purpose. \nToday, we are going to set some goals to work towards. These goals can be about the spaces themselves, the objects within them, or about yourself and what you want to achieve within those spaces with those objects. \nThis activity is the first step in creating a harmonized living space, we need to understand where we are before we can start working through it. The other activities will guide you through the steps required to create your idealized space.',
            CustomSection: false,
        },
        {
            title: 'Presence',
            body: 'Before we can begin, be sure that you are either: alone or in the presence of trusted and loved individuals. ~If your space is filled with others whom you don’t feel comfortable with at this time, we would suggest scheduling another day to work through your space alone or with people you feel comfortable with.~ \nWe also suggest you wear comfortable clothing during this process. Whatever and however you feel most comfortable.',
            CustomSection: false,
        },
        {
            title: 'Mindfulness',
            body: 'First, sit, kneel, or lay in a comfortable position within your space. Breathe deeply, inhaling, filling your lungs with air. Exhale. Notice how you are positioned and adjust your body to feel comfortable. Feel your face, relax your forehead, eyes, mouth, and head. Relieve any tension in your shoulders, stomach, legs, and feet. \nWith your eyes open, look around you, appreciate your space, taking notice of where you are relative to that space.  \nTake a moment to reflect on the following questions, which don\'t necessarily need an answer. \n^How do you feel while in this space?^  \n^What do you like about this space?^  \n^What role do you play within this space?^ \n^What do the things in your space say about you?^ \n^What do you wish this space could do for you?^',
            CustomSection: false,
        },
        {
            title: 'Goal Setting',
            body: '',
            CustomSection: GoalSetting
        }],
    },
    observingMyLivingSpace: {
        name: 'Observing My Living Space',
        description: 'This activity is meant to reinvigorate a space by looking at the individual objects that are within that space. This guided activity that aims to be grateful to and value your objects.',
        link: 'observing',
        imagePath: '/images/Frame 4.png',
        logInRequired: true,
        content: [{ title: 'h', body: 'b' }, {}],
    },
    purposefulOrganizing: {
        name: 'Purposeful Organizing',
        description: 'This activity is meant to reinvigorate a space by looking at the individual objects that are within that space. This guided activity that aims to be grateful to and value your objects.',
        link: 'purposeful-organizing',
        imagePath: '/images/Frame 5.png',
        logInRequired: true,
        content: [{ title: 'h', body: 'b' }, {}],
    },
    partingWaysWithObjects: {
        name: 'Parting Ways with Objects',
        description: 'This activity focuses on allowing you to manage and work through objects that may no longer serve a purpose in your space. We should try to avoid discarding objects, as to create less waste and strain on the environment.',
        link: 'parting-with-objects',
        imagePath: '/images/Frame 6.png',
        logInRequired: true,
        content: [{ title: 'h', body: 'b' }, {}],
    }
};

export const activitiesReduced = Object.values(activitiesMaster).map(({ name, description, imagePath, link, logInRequired }) => ({ name, description, imagePath, link, logInRequired }));

export const getActivity = (slug) => Object.values(activitiesMaster).find(({ link }) => (slug === link));

import ContactContent from "../components/ContactContent";
import EducationContent from "../components/EducationContent";
import PersonalContent from "../components/PersonalContent";
import ProfessionalContent from "../components/ProfessionalContent";
import SkillsContent from "../components/SkillsContent";
import WorkContent from "../components/WorkContent";

export const cardObjects = [
    {'name': 'Education', 'delay': 100, 'zoom': 'zoom-in-down', 'content': <EducationContent/>, 'fade': 'fade-down', 'delay': '400'}, 
    {'name': 'Skills and Expertise', 'delay': 200, 'zoom': 'zoom-in-down', 'content': <SkillsContent/>, 'fade': 'fade-down', 'delay': '300'},
    {'name': 'Work History', 'delay': 300, 'zoom': 'zoom-in-down', 'content': <WorkContent/>, 'fade': 'fade-down', 'delay': '100'}, 
    {'name': 'Professional Goals', 'delay': 400, 'zoom': 'zoom-in-up', 'content': <ProfessionalContent/>, 'fade': 'fade-up', 'delay': '100'}, 
    {'name': 'Personal Background', 'delay': 500, 'zoom': 'zoom-in-up', 'content': <PersonalContent/>, 'fade': 'fade-up', 'delay': '300'},
    {'name': 'Contact Information', 'delay': 600, 'zoom': 'zoom-in-up', 'content': <ContactContent/>, 'fade': 'fade-up', 'delay': '400'}];
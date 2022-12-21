import ContactContent from "../components/ContactContent";
import EducationContent from "../components/EducationContent";
import PersonalContent from "../components/PersonalContent";
import ProfessionalContent from "../components/ProfessionalContent";
import SkillsContent from "../components/SkillsContent";
import WorkContent from "../components/WorkContent";

export const cardObjects = [
    {'name': 'Education', 'delay': 100, 'zoom': 'zoom-in-down', 'content': <EducationContent/>}, 
    {'name': 'Skills and Expertise', 'delay': 200, 'zoom': 'zoom-in-down', 'content': <SkillsContent/>},
    {'name': 'Work History', 'delay': 300, 'zoom': 'zoom-in-down', 'content': <WorkContent/>}, 
    {'name': 'Professional Goals', 'delay': 400, 'zoom': 'zoom-in-up', 'content': <ProfessionalContent/>}, 
    {'name': 'Personal Background', 'delay': 500, 'zoom': 'zoom-in-up', 'content': <PersonalContent/>},
    {'name': 'Contact Information', 'delay': 600, 'zoom': 'zoom-in-up', 'content': <ContactContent/>}];
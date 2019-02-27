import bank from './images/digitalbank.png'
import discovery from './images/drugdiscovery.png'
import decisions from './images/insdecisions.png'
import design from './images/designthinking.png'
import quantum from './images/quantumsecurit.png'
import insurance from './images/newinsurance.png'

const content = [
  {heading: 'Accelerating reinvention with digital banking frameworks',
   description: 'What does building a truly digital bank entail? Reimagining employee engagement, customer experiences and other stakeholder relationships with new focus, expertise and ways of working. ',
   image: bank, link: {target:'https://www.ibm.com/services/us/gbs/thoughtleadership/digitalbank/', text: 'Learn about this topic'},
   report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/46/en/46020446usen/digitalbanking_ei_46020446USEN.pdf', text: 'Read PDF report'}},
  {heading: 'Disrupting drug discovery: How artificial intelligence is transforming drug research',
    description: 'To help accelerate drug discovery, leading organizations and researchers are turning to artificial intelligence.',
    image: discovery, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/drugdiscovery/', text: 'Learn about this topic'},
    report: {target: 'https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=75018975USEN&dd=yes&', text: 'Read PDF report'}},
  {heading: 'Cognitive decision making in insurance',
     description: 'To contextualize, organize and draw true meaning from data, insurers are turning to artificial intelligence to augment the capabilities of their business experts.',
     image: decisions, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/insdecisions/', text: 'Learn about this topic'},
     report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/77/en/77019477usen/77019477usen-00_77019477USEN.pdf', text: 'Read PDF report'}},
  {heading: 'Agile, meet design thinking: Get better experiences to market faster',
      description: 'By building multidisciplinary teams and combining a design thinking approach with agile methodologies, you can release products efficiently and increase the likelihood that a customer’s first impression will be a good one.',
      image: design, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/designthinking/', text: 'Learn about this topic'},
       report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/61/en/61018161usen/61018161usen-01_61018161USEN.pdf', text: 'Read PDF report'}},
  {heading: 'Wielding a double-edged sword: Preparing cybersecurity now for a quantum world',
       description: 'Large-scale quantum computers will significantly expand computing power, creating new opportunities for improving cybersecurity.',
       image: quantum, link: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/61/en/61018161usen/61018161usen-01_61018161USEN.pdf', text: 'Learn about this topic'},
        report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/39/en/39017839usen/39017839usen-00_39017839USEN.pdf', text: 'Read PDF report'}},
  {heading: 'The new face of insurance: How platforms can modernize and transform insurance',
        description: 'Insurance companies need agile platforms, technologies and tools to move successfully into the future.',
        image: insurance, link: {target:'https://www.ibm.com/thought-leadership/institute-business-value/report/newinsurance', text: 'Learn about this topic'},
         report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/05/en/05018005usen/05018005usen-00_05018005USEN.pdf', text: 'Read PDF report'}}

];

export default content;

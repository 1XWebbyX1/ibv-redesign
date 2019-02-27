import infog from './images/infog.jpeg'
import telecom from './images/BC_Telecom_Info.jpg'
import info from './images/DRactionInfo.jpg'
import gen from './images/Gen-Z.jpg'
import cognitive from './images/cognitive-era.png'
import api from './images/API_Infographic_snipit.jpg'


const content = [
  {heading: 'Reimagining telecommunications with blockchains: From concept to reality',
   image: telecom, report: {target: 'https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=GB912459USEN&dd=yes&', text: 'View the infographic'},
    link: {target: 'https://www.ibm.com/thought-leadership/institute-business-value/report/blockchaintelco', text: 'Learn more about this IBV study'}},
  {heading: 'Fast forward: Rethinking enterprises, ecosystems and economies with blockchains', image: infog,
   link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/blockchain/', text: 'Learn more about this IBV study'},
     report: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/blockchain/fastforwardii/', text: 'View the infographic'}},
  {heading: 'Digital Reinvention™ in action: What to do and how to make it happen',
     image: info, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/draction/', text: 'Learn more about this IBV study'},
      report: {target: 'https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=GB912354USEN&dd=yes&', text: 'View the infographic'}},
  {heading: 'A cognitive era for life sciences: How cognitive innovators can exploit the value of data',
      image: gen, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/genzshoppers/', text: 'Learn more about this IBV study'},
       report: {target: 'https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=GB912452USEN&dd=yes&', text: 'View the infographic'}},
  {heading: 'Demanding customers - but not in the way you think: Going shopping with Gen Z',
       image: cognitive, link: {target: 'https://www.ibm.com/blogs/insights-on-business/healthcare/cognitive-innovation-healthcare-life-sciences/', text: 'Learn more about this IBV study'},
        report: {target: 'https://public.dhe.ibm.com/common/ssi/ecm/17/en/17013817usen/a-cognitive-era-of-life-sciences_17013817USEN.pdf', text: 'View the infographic'}},
  {heading: 'Competing in the API economy: How to unlock value with new business models and winning experiences',
        image: api, link: {target: 'https://www.ibm.com/services/us/gbs/thoughtleadership/apieconomy/', text: 'Learn more about this IBV study'},
         report: {target: 'https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=GB912364USEN&dd=yes&', text: 'View the infographic'}}

];

export default content;

import React from "react";
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrow from '../assets/arrow.svg'

   const Accordion = styled((props) => (
            <MuiAccordion disableGutters elevation={0} square {...props} />
          ))(({ theme }) => ({
            borderBottom: `1px solid #3E29E3`,
            '&:first-of-type': {
                borderBottom: `1px solid #CBCBCC`,
            },
            '&:before': {
              display: 'none',
            },
          }));
          
          const AccordionSummary = styled((props) => (
            <MuiAccordionSummary
              expandIcon={<img src={arrow} alt="arrow"/>}
              {...props}
            />
          ))(({ theme }) => ({
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(255, 255, 255, .05)'
                : 'rgba(0, 0, 0, .03)',
            flexDirection: 'row',
            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
              transform: 'rotate(180deg)',
            },
            '& .MuiAccordionSummary-content': {
              marginRight: theme.spacing(1),
            
            },
          }));
          
          const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
            padding: theme.spacing(2),
            borderTop: '1px solid rgba(0, 0, 0, .125)',
          }));
          
          export default function AccordionMenu() {
            const [expanded, setExpanded] = React.useState('panel3');
          
            const handleChange = (panel) => (event, newExpanded) => {
              setExpanded(newExpanded ? panel : false);
            };
          
            return (
              <div style={{marginBottom: '160px'}}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography style={{color: '#7D7D7D'}}><b> Аккордеон</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography style={expanded === 'panel2' ? {color: '#3E29E3'} : {color: '#1B1B1B'}}><b> Аккордеон</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography style={expanded === 'panel3' ? {color: '#3E29E3'} : {color: '#1B1B1B'}}><b> Аккордеон</b></Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          }
    
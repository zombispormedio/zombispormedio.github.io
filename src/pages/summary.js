import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import { format } from "date-fns";
import { SiteHead, HomeButton } from "../components";

const SummaryWrapper = styled.div`
  background: #eeeeee;
  font: 12px "Times New Roman", Times, sans-serif;
  line-height: 1.4;
  em {
    color: #999;
  }
  p {
    line-height: 1.4;
  }
  ul {
    margin-bottom: 0;
  }
  li {
    margin-bottom: 2px;
  }
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 40em) {
    margin: 0;
    font-size: 14px;
  }

  @media print {
    a {
      color: black;
    }
  }
`;

const ResumeContainer = styled.div`
  margin: 0 auto;
  max-width: 50rem;
  padding: 80px 100px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 4px #aaa;
  -webkit-box-shadow: 2px 2px 4px #aaa;

  @media only screen and (max-width: 40em) {
    margin: 0 auto;
    max-width: 600px;
    padding: 0.5em 1em;
    border: none;
  }

  @media print {
    margin: 0 auto;
    max-width: 600px;
    padding: 0px 0px;
    border: 0px;
    background: #fff;
    box-shadow: none;
    -webkit-box-shadow: none;
  }
`;

const NameBlock = styled.div`
  font-size: 20px;
`;

const BasicsBlock = styled.div`
  font-size: 12px;
  @media only screen and (max-width: 40em) {
    font-size: 14px;
  }
`;

const SectionLine = styled.div`
  border-style: dashed;
  border-width: 1px;
  border-color: #cfcfcf;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SectionBlock = styled.div`
  display: flex;
  width: 100%;
`;

const SectionName = styled.div`
  width: 18%;
  vertical-align: top;
  display: inline-block;

  @media only screen and (max-width: 40em) {
    width: auto;
    margin-right: 0.5rem;
  }
`;

const SectionContent = styled.div`
  width: 80%;
  vertical-align: top;
  display: inline-block;

  ul {
    padding-left: 20px;
    margin-top: 6px;
    list-style-type: circle;
  }

  .title {
    font-weight: bold;
  }

  .date {
    float: right;
  }

  .separator {
    height: 14px;
  }

  @media only screen and (max-width: 40em) {
    width: 100%;
    .date {
      padding-right: 2em;
    }
  }
`;

const JobBlock = styled.div`
  page-break-inside: avoid;
`;

const SkillBlock = styled.div`
  margin-bottom: 4px;
`;

const HomeLink = styled(Link)`
  @media print {
    display: none;
  }
`;

const SummaryPage = ({
  data: {
    summaryJson: {
      basics: { name, label, email, location, profiles },
      work,
      education,
      skills,
      languages,
      interests
    }
  }
}) => (
  <SummaryWrapper>
    <SiteHead />
    <HomeLink to="/">
      {" "}
      <HomeButton />
    </HomeLink>
    <ResumeContainer>
      <NameBlock>
        <span className="name">{name}</span>
        {", "}
        <span className="label">{label}</span>
      </NameBlock>
      <BasicsBlock>
        <div className="contactBlock">
          <span className="email">{email}</span>
          <span className="divider"> | </span>
          <span className="address">
            {location.city}, {location.region}, {location.countryCode}
          </span>
        </div>
        <div className="profilesBlock">
          {profiles.slice(0, 3).map(({ url, id }, index) => (
            <Fragment key={id}>
              <a href={url}>{url.replace("https://", "")}</a>
              {index < 2 && " |  "}
            </Fragment>
          ))}
        </div>
      </BasicsBlock>
      <SectionLine />

      <SectionBlock>
        <SectionName>
          <span>EXPERIENCE</span>
        </SectionName>
        <SectionContent>
          {work.map(
            (
              {
                company,
                position,
                startDate,
                endDate,
                website,
                summary,
                highlights
              },
              index
            ) => (
              <JobBlock key={company}>
                <div className="blockHeader">
                  <span className="title">
                    {company}, {position}
                  </span>
                  <span className="date">
                    {format(new Date(startDate), "MMMM yyyy")} &mdash;{" "}
                    {endDate
                      ? format(new Date(endDate), "MMMM yyyy")
                      : "Present"}
                  </span>
                </div>
                <div>
                  <a href={website}>{website.replace("https://", "")}</a>
                </div>
                <div>{summary}</div>
                <ul className="highlights">
                  {highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {index < work.length - 1 && <div className="separator" />}
              </JobBlock>
            )
          )}
        </SectionContent>
      </SectionBlock>

      <SectionLine />

      <SectionBlock>
        <SectionName>
          <span>EDUCATION</span>
        </SectionName>
        <SectionContent>
          {education.map(
            ({ institution, startDate, endDate, area, studyType }) => (
              <div key={institution} className="educationBlock">
                <span className="title">{institution}</span>
                {format(new Date(startDate), "MMMM yyyy")} &mdash;{" "}
                {endDate ? format(new Date(endDate), "MMMM yyyy") : "Present"}
                <div>
                  {studyType} - {area}
                </div>
              </div>
            )
          )}
        </SectionContent>
      </SectionBlock>

      <SectionLine />
      <SectionBlock>
        <SectionName>
          <span>SKILLS</span>
        </SectionName>
        <SectionContent>
          {skills.map(skill => (
            <SkillBlock key={skill.name}>
              <span className="title">{skill.name}: </span>
              {skill.keywords.join(", ")}
            </SkillBlock>
          ))}
        </SectionContent>
      </SectionBlock>

      <SectionLine />

      <SectionBlock>
        <SectionName>
          <span>LANGUAGES</span>
        </SectionName>
        <SectionContent>
          {languages.map(({ language, fluency }, index) => (
            <Fragment key={language}>
              <span className="language">{language} </span>
              <span className="fluency">
                <em>({fluency})</em>
              </span>
              {index < languages.length - 1 && ", "}
            </Fragment>
          ))}
        </SectionContent>
      </SectionBlock>

      <SectionLine />

      <SectionBlock>
        <SectionName>
          <span>INTERESTS</span>
        </SectionName>
        <SectionContent>
          {interests.map((interest, index) => (
            <Fragment key={interest.name}>
              <span className="name">{interest.name} </span>
              <span className="keywords">
                <em>[{interest.keywords.join(", ")}]</em>
              </span>
              {index < interests.length - 1 && ", "}
            </Fragment>
          ))}
        </SectionContent>
      </SectionBlock>
    </ResumeContainer>
  </SummaryWrapper>
);

SummaryPage.propTypes = {
  data: PropTypes.shape({}).isRequired
};

export default SummaryPage;

export const query = graphql`
  query SummaryQuery {
    summaryJson {
      basics {
        name
        label
        email
        location {
          city
          region
          countryCode
        }
        profiles {
          id
          network
          url
        }
      }

      work {
        company
        position
        website
        startDate
        endDate
        summary
        highlights
      }

      education {
        institution
        area
        studyType
        startDate
        endDate
      }
      skills {
        name
        keywords
      }

      languages {
        language
        fluency
      }

      interests {
        name
        keywords
      }
    }
  }
`;

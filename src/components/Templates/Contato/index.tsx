import React, { useContext } from "react";
import { Mail as MailIcon } from "@styled-icons/feather/Mail";
import { Github as GithubIcon } from "@styled-icons/feather/Github";
import { Behance as BehanceIcon } from "@styled-icons/fa-brands/Behance";
import { Linkedin as LinkedinIcon } from "@styled-icons/feather/Linkedin";

import { I18nContext } from "/@/data/context/I18nContext";

import Header from "/@/components/Atoms/Header";
import { Grid } from "/@/components/Atoms/Grid";
import { Spacer } from "/@/components/Atoms/Spacer";

import * as S from "./styles";

export default function Contato() {
  const { locale } = useContext(I18nContext);

  return (
    <main>
      <Header />

      <Spacer size={96} />

      <Grid.Container>
        <Grid.Column
          offset={{ xs: 0, md: 3 }}
          spanRows={{
            xs: 12,
            md: 6,
          }}
        >
          <Grid.Container>
            <Grid.Column
              spanRows={{
                xs: 12,
              }}
            >
              <S.TitleContainer>
                <h3>{locale.home.contactLinks}</h3>

                <hr />
              </S.TitleContainer>

              <Spacer size={12} />
            </Grid.Column>

            <Grid.Column
              spanRows={{
                xs: 12,
                md: 6,
              }}
            >
              <S.IconContainer>
                <GithubIcon />

                <Spacer size={8} />

                <a
                  href="https://github.com/Emanuelpna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </S.IconContainer>
            </Grid.Column>

            <Grid.Column
              spanRows={{
                xs: 12,
                md: 6,
              }}
            >
              <S.IconContainer>
                <BehanceIcon />

                <Spacer size={8} />

                <a
                  href="https://www.behance.net/emanuelpna"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </S.IconContainer>
            </Grid.Column>

            <Grid.Column
              spanRows={{
                xs: 12,
                md: 6,
              }}
            >
              <S.IconContainer>
                <LinkedinIcon />

                <Spacer size={8} />

                <a
                  href="https://www.linkedin.com/in/emanuelpna/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </S.IconContainer>
            </Grid.Column>

            <Grid.Column
              spanRows={{
                xs: 12,
                md: 6,
              }}
            >
              <S.IconContainer>
                <MailIcon />

                <Spacer size={8} />

                <a
                  href="mailto:emanuelpnandrade@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email
                </a>
              </S.IconContainer>
            </Grid.Column>
          </Grid.Container>
        </Grid.Column>
      </Grid.Container>
    </main>
  );
}

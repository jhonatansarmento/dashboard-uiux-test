'use client';

import { profile } from '@/constants/profile';
import Image from 'next/image';
import {
  LuBriefcase,
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuMail,
} from 'react-icons/lu';
import * as S from './styles';

const Contacts = () => {
  return (
    <S.Container>
      <S.ProfileImage>
        <Image
          src={profile.image}
          alt={profile.name}
          width={120}
          height={120}
        />
      </S.ProfileImage>
      <S.Info>
        <S.Name>{profile.name}</S.Name>
        <S.Position>
          <LuBriefcase size={20} />
          {profile.position}
        </S.Position>
        <S.ContactInfo>
          <S.ContactItem href={`mailto:${profile.email}`}>
            <LuMail size={20} />
            {profile.email}
          </S.ContactItem>
          <S.ContactItem href={profile.linkedin} target='_blank'>
            <LuLinkedin size={20} />
            LinkedIn
          </S.ContactItem>
          <S.ContactItem href={profile.github} target='_blank'>
            <LuGithub size={20} />
            GitHub
          </S.ContactItem>
          <S.ContactItem href={profile.instagram} target='_blank'>
            <LuInstagram size={20} />
            Instagram
          </S.ContactItem>
        </S.ContactInfo>
      </S.Info>
    </S.Container>
  );
};

export default Contacts;

import styled from '@emotion/styled';
import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import HomeContext from '../../contexts/HomeContext';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin: 53px 41px;
`;
const SearchInput = styled.input`
  /* regular/M */

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  background: transparent;
  border: transparent;
`;

export default function Search() {
  const { search, setSearch } = useContext(HomeContext);
  return (
    <Container>
      <label htmlFor='search'>
        {search ? (
          <IoIosArrowBack onClick={() => setSearch('')} />
        ) : (
          <FiSearch />
        )}
      </label>
      <SearchInput
        type='text'
        placeholder='Search'
        id='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
}

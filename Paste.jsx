import 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const filteredData = pastes.filter ((paste) => paste.title.toLowercase().includes(searchTerm.toLowerCase ));

  return (
    <div>
      List of Pastes
    </div>
  )
}

export default Paste

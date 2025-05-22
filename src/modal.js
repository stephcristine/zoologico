export default function Modal({ animal, onClose }) {
  if (!animal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{animal.common_name}</h2>
        <img
          src={`https://aes.shenlu.me/images/${animal.id}.jpg`}
          alt={animal.common_name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <p><strong>Status:</strong> {animal.conservation_status || 'Desconhecido'}</p>
        <p><strong>Nome Científico:</strong> {animal.scientific_name || 'Não informado'}</p>
        <p><strong>Grupo:</strong> {animal.group || 'Não informado'}</p>
      </div>
    </div>
  );
}

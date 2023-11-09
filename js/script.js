const calculate = document.getElementById("calculate");
const result = document.getElementById("result");
const weigthInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const score = document.getElementById("score");
const category = document.getElementById("category");
const explanation = document.getElementById("explanation");

const categoryBmi = (bmi) => {
  if (bmi < 18.5) return "Kekurangan Berat Badan";
  if (bmi >= 18.5 && bmi < 24.9) return "Normal (Ideal)";
  if (bmi >= 25 && bmi <= 29.9) return "Kelebihan Berat Badan";
  return "Obesitas";
};

const explanationBmi = (bmi) => {
  if (bmi < 18.5) return "Berat rendah dapat menyebabkan berbagai masalah penyakit, seperti Infertilitas, Anemia, Osteoporosis, dan Sistem Imun Lemah. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
  if (bmi >= 18.5 && bmi < 24.9) return "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
  if (bmi >= 25 && bmi <= 29.9) return "Beberapa penyakit yang berasal dari kegemukan, seperti Diabetes, Hipertensi, Sakit Jantung, dan Osteoarthritis. Anda dianjurkan untuk menurunkan berat badan hingga batas normal. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.";
  return "Beberapa penyakit yang berasal dari kegemukan, seperti Diabetes, Hipertensi, Sakit Jantung, dan Osteoarthritis. Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
};

const calculateBmi = () => {
  if (weigthInput.value == "" || heightInput.value == "")
    return alert("input can't empty");

  const weight = parseFloat(weigthInput.value);
  const height = parseFloat(heightInput.value) / 100;

  const bmi = weight / (height * height);

  score.innerText = bmi.toFixed(2);
  category.innerText = categoryBmi(bmi);
  explanation.innerText = explanationBmi(bmi);

  result.style.display = "flex";
};

calculate.addEventListener("click", () => calculateBmi());
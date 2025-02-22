import { defineStore } from 'pinia'
import { ref } from 'vue'
import html2canvas from 'html2canvas'
export const useQRStore = defineStore('qr', () => {
  const inputValue = ref('')
  const QRValue = ref('')
  const imageUrl = ref('/Duck.jpg')

  const generateQR = () => {
    QRValue.value = inputValue.value
  }

  const setImage = (file) => {
    imageUrl.value = URL.createObjectURL(file)
  }
  return {
    inputValue,
    setImage,

    imageUrl,
    QRValue,
    generateQR,
  }
})

const downloadQR = async (format) => {
  const qrContainer = document.getElementById('qrContainer')
  if (!qrContainer) return

  try {
    // Tampilkan elemen sebelum di-screenshot
    qrContainer.classList.remove('hidden')

    // Tunggu render selesai
    await new Promise((resolve) => setTimeout(resolve, 100))

    const canvas = await html2canvas(qrContainer, {
      backgroundColor: null, // Tetapkan transparan agar sesuai dengan desain
      scale: window.devicePixelRatio || 1, // Meningkatkan resolusi gambar
      useCORS: true, // Menghindari masalah CORS jika ada gambar eksternal
      logging: false, // Mengurangi log agar lebih rapi
    })

    // Sembunyikan elemen setelah di-screenshot
    qrContainer.classList.add('hidden')

    const imgData = canvas.toDataURL(`image/${format}`)
    const link = document.createElement('a')
    link.href = imgData
    link.download = `qrcode.${format}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error generating QR code image:', error)
  }
}

export { downloadQR }

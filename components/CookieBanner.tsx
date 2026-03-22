'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface CookieConsent {
  technical: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    technical: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const storedConsent = localStorage.getItem('wt_cookie_consent')
    if (storedConsent === null) {
      setShowBanner(true)
    }
  }, [])

  const saveConsent = (consentData: CookieConsent) => {
    localStorage.setItem('wt_cookie_consent', JSON.stringify(consentData))
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: consentData }))
    setShowBanner(false)
    setShowDialog(false)
  }

  const acceptAll = () => {
    saveConsent({ technical: true, analytics: true, marketing: true })
  }

  const acceptNecessary = () => {
    saveConsent({ technical: true, analytics: false, marketing: false })
  }

  const savePreferences = () => {
    saveConsent(consent)
  }

  if (!showBanner) return null

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-4 shadow-2xl md:p-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-600">
            Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. 
            Puedes aceptar todas o gestionar tus preferencias.{' '}
            <Link href="/cookies" className="text-primary underline hover:text-primary/80">
              Política de Cookies
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={acceptAll} className="bg-primary hover:bg-primary/90">
              Aceptar todas
            </Button>
            <Button variant="outline" onClick={acceptNecessary}>
              Solo necesarias
            </Button>
            <Button variant="ghost" onClick={() => setShowDialog(true)}>
              Gestionar
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Preferencias de Cookies</DialogTitle>
            <DialogDescription>
              Gestiona tus preferencias de cookies. Las cookies técnicas son necesarias para el funcionamiento del sitio.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="technical">Técnicas</Label>
                <p className="text-sm text-muted-foreground">
                  Necesarias para el funcionamiento
                </p>
              </div>
              <Switch id="technical" checked disabled />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="analytics">Analíticas</Label>
                <p className="text-sm text-muted-foreground">
                  Google Analytics, tráfico anónimo
                </p>
              </div>
              <Switch
                id="analytics"
                checked={consent.analytics}
                onCheckedChange={(checked) =>
                  setConsent((prev) => ({ ...prev, analytics: checked }))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">Marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Contenido personalizado
                </p>
              </div>
              <Switch
                id="marketing"
                checked={consent.marketing}
                onCheckedChange={(checked) =>
                  setConsent((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancelar
            </Button>
            <Button onClick={savePreferences}>Guardar preferencias</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
